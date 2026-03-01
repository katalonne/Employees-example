import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';
import { fetcher } from './fetcher';

export type User = {
  id: number;
  name: string;
  status: string;
  img?: string;
};

const USERS_URL = 'http://localhost:3001/users';

// ... existing code ...

export const useUsers = () => {
  const { data, error, isLoading } = useSWR<User[]>(
    USERS_URL,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false, // <-- disable retry
      errorRetryCount: 0,        // <-- extra safety
    }
  );

  return {
    users: Array.isArray(data) ? data : [],
    isLoading,
    isError: error as Error | undefined
  };
};

// POST fetcher
async function postUserStatus(
  _key: string,
  { arg }: { arg: { id: number; status: string } }
): Promise<User[]> {
  const res = await fetch(`${USERS_URL}/${arg.id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: arg.id, status: arg.status })
  });
  if (!res.ok) throw new Error(`POST /users/${arg.id} failed: ${res.status}`);
  return res.json() as Promise<User[]>;
}

// export function useUpdateUserStatus() {
//   const { mutate } = useSWRConfig();

//   const { trigger, isMutating, error } =
//     useSWRMutation<User[], Error, string, { id: number; status: string }>(
//       `${USERS_URL}::update`,
//       postUserStatus
//     );

//   async function updateUserStatus(id: number, status: string) {
//     // single optimistic cache update
//     await mutate<User[]>(
//       USERS_URL,
//       (current) => (current ?? []).map(u => (u.id === id ? { ...u, status } : u)),
//       { revalidate: false, populateCache: true }
//     );

//     try {
//       // send request, but do NOT write server array again (prevents extra visual blip)
//       await trigger({ id, status }, { throwOnError: true });
//     } catch (e) {
//       // rollback from server if request failed
//       await mutate<User[]>(USERS_URL); // revalidate
//       throw e;
//     }
//   }

//   return { updateUserStatus, isUpdating: isMutating, updateError: error };
// }

export function useUpdateUserStatus() {
  const { mutate } = useSWRConfig();

  const { trigger, isMutating, error } =
    useSWRMutation<User[], Error, string, { id: number; status: string }>(
      `${USERS_URL}::update`,
      postUserStatus
    );

  async function updateUserStatus(id: number, status: string) {
    let previousUsers: User[] = [];

    await mutate<User[]>(
      USERS_URL,
      (current) => {
        const safeCurrent = Array.isArray(current) ? current : [];
        // clone snapshot to avoid accidental shared reference issues
        previousUsers = safeCurrent.map(u => ({ ...u }));
        return safeCurrent.map((u) => (u.id === id ? { ...u, status } : u));
      },
      { revalidate: false, populateCache: true }
    );

    try {
      const serverUsers = await trigger({ id, status }, { throwOnError: true });
      if (Array.isArray(serverUsers)) {
        await mutate<User[]>(USERS_URL, serverUsers, { revalidate: false });
      }
    } catch (e) {
      await mutate<User[]>(USERS_URL, previousUsers, { revalidate: false, populateCache: true });
      throw e;
    }
  }

  return { updateUserStatus, isUpdating: isMutating, updateError: error };
}