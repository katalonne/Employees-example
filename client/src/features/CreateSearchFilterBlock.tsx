import Stack from '@mui/material/Stack';
import { 
  Button, 
  SearchInput, 
  CustomSelect 
} from "../components"

interface CreateSearchFilterBlockProps {
  onCreateClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional, specific to button clicks
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  statuses: Array<string>;
  selectedStatus?: string;
  onStatusFilterChange?: (value: string | number) => void;
}

export const CreateSearchFilterBlock: React.FC<CreateSearchFilterBlockProps> = ({
  onCreateClick = () => {},
  searchValue = '',
  onSearchChange = () => {},
  statuses = [],
  selectedStatus = 'All',
  onStatusFilterChange = () => {},
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ height: 60 }}
    >
      <Button 
        text="Create" 
        sx={{ height: '100%'}}
        onClick={onCreateClick}
      />
      <Stack
        direction="row"
        sx={{ flexGrow: 1, height: '100%' }}
      >
        <SearchInput 
          height="100%" 
          width='100%' 
          value={searchValue}
          onChange={onSearchChange}
        />
        <CustomSelect 
          emptyValue="Filter by status"
          height="100%"
          width="300px"
          backgroundColor="#fff"
          showBorderBottom={false}
          padding={'10px 0px 10px 25px'}
          options={['All'].concat(statuses)}
          value={selectedStatus}
          onSelect={onStatusFilterChange}
        />
      </Stack>
    </Stack>
  )
}