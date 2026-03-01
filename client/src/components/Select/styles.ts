import { type CSSProperties } from 'react';
import { Select, outlinedInputClasses, selectClasses } from '@mui/material';
import styled from '@emotion/styled';
import { type Theme } from '@mui/material/styles';
import { selectValueToColorMap } from '../../constants';

type CircleValueProp = 'Working' | 'On Vacation' | 'Business Trip';
export const StyledCircle = styled('div')<{
  theme?: Theme;
  value: CircleValueProp;
}>(({ theme, value }) => {
  const circleColor =
    selectValueToColorMap[value] || theme.palette.success.main;
  return `
    position: relative;
    width: 12px;
    height: 12px;
    background-color: ${circleColor};
    border-radius: 50%;
    &:after {
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border-radius: 50%;
    }
`;
});

export const StyledSelect = styled(Select)<{
  theme?: Theme;
  backgroundcolor: CSSProperties['backgroundColor'];
  showborderbottom: string;
  padding: CSSProperties['padding'];
  height: CSSProperties['height'];
}>(({
  backgroundcolor,
  showborderbottom,
  padding = '10px 0px 10px 0px',
  height = 'auto',
}) => {
  return `
    height: ${height};
    background-color: ${backgroundcolor};
    
    & .${outlinedInputClasses.notchedOutline} {
      border-top: none;
      border-left: none;
      border-right: none;
      ${showborderbottom === 'true' ? '' : `border-bottom: none;`}
      border-radius: 0;
      padding: 0 4px;
    }

    & .${selectClasses.select} {
      padding: ${padding};
      display:flex;
      height: 100%;
      align-items: center;
    }
  `;
});
