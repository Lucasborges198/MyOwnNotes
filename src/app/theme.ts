import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e1e1e',
      paper: '#232323',
    },
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#FF9800',
    },
    error: {
      main: '#F44336',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
    divider: 'rgba(255,255,255,0.10)',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '28px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '18px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '15px',
      fontWeight: 400,
      color: '#cccccc',
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#1e1e1e',
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});
