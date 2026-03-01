import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface NavbarProps {
  logoText: string; // Text for the logo
  logoutText: string; // Text for the logout button or link
}

export const Navbar: React.FC<NavbarProps> = ({
  logoText = '',
  logoutText = '',
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='white' elevation={0}>
        <Toolbar>
          <Typography
            variant='h6'
            color='primary.light'
            fontWeight={'bold'}
            component='div'
            sx={{ flexGrow: 1 }}
          >
            {logoText}
          </Typography>
          <Button variant='outlined'>
            <Typography
              variant='body2'
              fontWeight={'bold'}
              color='primary.light'
            >
              {logoutText}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
