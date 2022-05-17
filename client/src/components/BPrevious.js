import React from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BPrevious () {
  const theme = createTheme ({
    typography: {
      fontFamily: [
        'Quicksand', 'sans-serif',
      ].join(','),
      fontSize: 16,
      fontWeightMedium:700,
    },
    palette: {
      primary: {
        main: '#5870E0'
      },
      action: {
        hover: (106, 24, 168, 1)
      }
    },
    shape: {
      borderRadius: 20
    },
   
  });

  return (
    <ThemeProvider theme={theme}>
      <Button id="previous_button"
      onClick={() => {
      alert('clicked');
      }}
      variant="contained">
        {"< PREVIOUS"}
    </Button>
  </ThemeProvider>
  )
}