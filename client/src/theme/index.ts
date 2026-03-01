import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    white: {
      main: '#fff',
      contrastText: '#000',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'none',
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }),

        // optional: only when color="primary"
        primary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.light,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            boxShadow: 'none',
          },
        }),
      },
      defaultProps: {
        disableElevation: true, // Disable elevation for all Buttons by default
      },
    },
    MuiInput: { // standard variant uses MuiInput
      styleOverrides: {
        root: ({ theme }) => ({
          '&:after': {
            borderBottomColor: theme.palette.primary.light,
          },
        }),
      },
      
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-focused': {
            color: theme.palette.primary.light,
          },
        }),
      },
    },
    // You can do the same for other components that support this prop, 
    // for example, MuiAppBar or MuiPaper if they are using it
  },
})