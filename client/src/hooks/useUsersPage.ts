import { useCallback, useMemo, useState } from 'react';
import useDebouncedEffect from 'use-debounced-effect';
import { useUsers, useUpdateUserStatus, type User } from '../api/useUsers';

type UsersPageState = {
  isDialogOpen: boolean;
  searchValue: string;
  debouncedSearchValue: string;
  selectedStatus: string;
};

export function useUsersPage() {
  const { users = [], isLoading, isError } = useUsers();
  const { updateUserStatus, isUpdating, updateError } = useUpdateUserStatus();

  const [state, setState] = useState<UsersPageState>({
    isDialogOpen: false,
    searchValue: '',
    debouncedSearchValue: '',
    selectedStatus: 'All',
  });

  const { isDialogOpen, searchValue, debouncedSearchValue, selectedStatus } = state;

  const handleDialogOpen = useCallback(() => {
    setState(prev => ({ ...prev, isDialogOpen: true }));
  }, []);

  const handleDialogClose = useCallback(() => {
    setState(prev => ({ ...prev, isDialogOpen: false }));
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setState(prev => ({ ...prev, searchValue: value }));
  }, []);

  useDebouncedEffect(
    () => {
      setState(prev => ({ ...prev, debouncedSearchValue: prev.searchValue }));
    },
    300,
    [searchValue]
  );

  const handleStatusChange = useCallback((userId: number, newStatus: string | number) => {
    updateUserStatus(userId, String(newStatus)).catch(err => {
      console.error('Update failed', err);
    });
  }, [updateUserStatus]);

  const handleStatusFilterChange = useCallback((value: string | number) => {
    setState(prev => ({ ...prev, selectedStatus: String(value) }));
  }, []);

  const filteredUsers = useMemo<User[]>(() => {
    const q = debouncedSearchValue.trim().toLowerCase();

    return users.filter((u) => {
      const byName = !q || u.name.toLowerCase().includes(q);
      const byStatus = selectedStatus === 'All' || u.status === selectedStatus;
      return byName && byStatus;
    });
  }, [users, debouncedSearchValue, selectedStatus]);

  return {
    users,
    filteredUsers,
    isLoading,
    isError,
    isUpdating,
    updateError,
    isDialogOpen,
    searchValue,
    selectedStatus,
    handleDialogOpen,
    handleDialogClose,
    handleSearchChange,
    handleStatusChange,
    handleStatusFilterChange,
  };
}