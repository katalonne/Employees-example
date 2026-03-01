// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());
