import { useCallback, useState, useEffect, type CSSProperties } from 'react';
import { MenuItem, FormControl, type SelectProps, type FormControlProps } from '@mui/material';
import { StyledCircle, StyledSelect } from './styles';
import { type Status } from '../../constants';

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

  // this effect is used when reverting to prev value, when api returned an error
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState((state) => ({ ...state, selectValue: value }));
  }, [value]);

  const { selectValue } = state;

  const handleSelectChange = useCallback(
    (selectValue: string) => {
      setState((state) => ({ ...state, selectValue }));
      onSelect(selectValue);
    },
    [onSelect],
  );

  return (
    <FormControl variant={variant as FormControlProps['variant']} sx={{ minWidth: 120, width: width }}>
      <StyledSelect
        height={height}
        padding={padding}
        showborderbottom={showBorderBottom.toString()}
        backgroundcolor={backgroundColor}
        displayEmpty
        value={selectValue}
        onChange={(e) => handleSelectChange(e.target.value as string)}
        /* eslint-disable @typescript-eslint/no-explicit-any */
        renderValue={(value: any) => {
          return value ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <StyledCircle value={value as Status}></StyledCircle>
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
