import { type CSSProperties } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearchInput } from './styles';

interface SearchInputProps {
  placeholder?: string;
  height?: CSSProperties['height']; // Optional height for the input
  width?: CSSProperties['width']; // Optional width for the input
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Type to search',
  height = '40px',
  width = 'auto',
  value = '',
  onChange = () => {},
}) => {
  return (
    <StyledSearchInput
      height={height}
      width={width}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      startAdornment={<SearchIcon />}
    />
  );
};
