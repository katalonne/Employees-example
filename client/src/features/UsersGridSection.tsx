import { memo } from 'react';
import { Alert, Grid, Skeleton, Stack } from '@mui/material';
import { PersonCard } from '../components';
import type { User } from '../api/useUsers';

interface UsersGridSectionProps {
  users: User[];
  isLoading: boolean;
  isError?: Error;
  statuses: string[];
  onStatusChange: (userId: number, newStatus: string | number) => void;
}

export const UsersGridSection = memo(
  ({
    users,
    isLoading,
    isError,
    statuses,
    onStatusChange,
  }: UsersGridSectionProps) => {
    return (
      <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
        {isError && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity='error'>{String(isError.message || isError)}</Alert>
          </Stack>
        )}

        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <Grid
              key={`skeleton-${index}`}
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
            >
              <Skeleton variant='rectangular' height={180} />
            </Grid>
          ))}

        {!isLoading &&
          users.map((user) => (
            <Grid key={user.id} size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
              <PersonCard
                userId={user.id}
                fullName={user.name}
                status={user.status}
                imgUrl={user.img ?? ''}
                imgAlt={`${user.name} img`}
                statuses={statuses}
                onStatusChange={onStatusChange}
              />
            </Grid>
          ))}
      </Grid>
    );
  },
);
