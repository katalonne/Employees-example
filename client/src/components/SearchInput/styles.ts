import { type CSSProperties } from 'react'
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';

export const StyledSearchInput = styled(InputBase)<{ 
  height: CSSProperties['height'], 
  width: CSSProperties['width'] 
}>(({ height = 'auto', width = 'auto' }) => {
  return `
    position: relative;
    display: flex;
    // border: 1px solid red;
    background: #fff;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: ${height};
    width: ${width};
    padding-left: 20px;
    & svg {
      color: gray;
      width: 18px;
      height: 18px;
      pointer-events: none;
    }
    & input {
      padding-left:10px;
    }
    &:after {
      content: '';
      height: 50%;
      background: gray;
      width: 1px;
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.4;
    }
  `
})
