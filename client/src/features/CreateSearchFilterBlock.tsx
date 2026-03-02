import { useMemo, memo } from 'react';
import Stack from '@mui/material/Stack';
import { Button, SearchInput, CustomSelect } from '../components';
import { type Status, type StatusFilterOption } from '../constants';

interface CreateSearchFilterBlockProps {
  onCreateClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional, specific to button clicks
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  statuses: readonly Status[]; 
  selectedStatus?: string;
  onStatusFilterChange?: (value: string | number) => void;
}

export const CreateSearchFilterBlock: React.FC<
  CreateSearchFilterBlockProps
> = memo(({
  onCreateClick = () => {},
  searchValue = '',
  onSearchChange = () => {},
  statuses = [],
  selectedStatus = 'All',
  onStatusFilterChange = () => {},
}) => {
  const statusOptions = useMemo<readonly StatusFilterOption[]>(
    () => ['All', ...statuses],
    [statuses],
  );

  return (
    <Stack direction='row' spacing={2} sx={{ height: 60 }}>
      <Button text='Create' sx={{ height: '100%' }} onClick={onCreateClick} />
      <Stack direction='row' sx={{ flexGrow: 1, height: '100%' }}>
        <SearchInput
          height='100%'
          width='100%'
          value={searchValue}
          onChange={onSearchChange}
        />
        <CustomSelect
          emptyValue='Filter by status'
          height='100%'
          width='300px'
          backgroundColor='#fff'
          showBorderBottom={false}
          padding={'10px 0px 10px 25px'}
          options={statusOptions}
          value={selectedStatus}
          onSelect={onStatusFilterChange}
        />
      </Stack>
    </Stack>
  );
});
