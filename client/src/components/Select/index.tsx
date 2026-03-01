import { useCallback, useState, useEffect, type CSSProperties } from 'react';
import { MenuItem, FormControl, type SelectProps } from '@mui/material';
import { StyledCircle, StyledSelect } from './styles';

interface CustomSelectProps {
  emptyValue?: string; // Optional string for the empty value text
  value?: string; // Optional string for the selected value
  backgroundColor?: CSSProperties['backgroundColor']; // Optional string for background color
  showBorderBottom?: boolean; // Optional boolean to show or hide bottom border
  padding?: CSSProperties['padding']; // Optional string for padding
  height?: CSSProperties['height']; // Optional string for height
  width?: CSSProperties['width']; // Optional string for width
  variant?: SelectProps['variant']; // Optional string for variant
  options?: Array<string>;
  onSelect?: (selectValue: string | number) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  emptyValue = 'Select value',
  value = '',
  backgroundColor = 'transparent',
  showBorderBottom = true,
  padding = '10px 0px 10px 0px',
  height = 'auto',
  width = '100%',
  variant = '',
  options = [],
  onSelect = () => {},
}) => {
  const [state, setState] = useState({
    selectValue: value,
  });
  useEffect(() => {
    setState((state) => ({ ...state, selectValue: value }));
  }, [value]);

  const { selectValue } = state;

  const handleSelectChange = useCallback(
    (selectValue: string) => {
      setState((state) => ({ ...state, selectValue }));
      onSelect(selectValue);
    },
    [selectValue],
  );

  return (
    <FormControl variant={variant as any} sx={{ minWidth: 120, width: width }}>
      <StyledSelect
        height={height}
        padding={padding}
        showborderbottom={showBorderBottom.toString()}
        backgroundcolor={backgroundColor}
        displayEmpty
        value={selectValue}
        onChange={(e) => handleSelectChange(e.target.value as string)}
        renderValue={(value: any) => {
          return value ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <StyledCircle value={value}></StyledCircle>
              {value}
            </div>
          ) : (
            <div style={{ opacity: 0.6 }}>{emptyValue}</div>
          );
        }}
      >
        {options.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};
