import { memo } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, type SxProps, type Theme } from '@mui/material';

interface ButtonProps {
  text: string; // A string type for the text
  sx?: SxProps<Theme>; // Optional CSS properties object for inline styles
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click event handler
}

export const Button: React.FC<ButtonProps> = memo(({
  text = '',
  sx = {},
  onClick = () => {},
}) => {
  return (
    <Fab
      onClick={onClick}
      color='primary'
      sx={{
        width: '200px',
        boxShadow: 'none',
        borderRadius: 1,
        px: 2.5,
        gap: 0.5,
        ...sx,
      }}
      variant='extended'
      size='medium'
    >
      {text}
      <AddIcon />
    </Fab>
  );
});
