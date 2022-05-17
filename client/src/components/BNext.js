import React from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BNext () {
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
    shadow: {
      1: "0px 15px 60px rgba(0, 0, 0, 0.25)"
    }

  });

  return (
    <ThemeProvider theme={theme}>
      <Button id="next_button"
      onClick={() => {
      alert('clicked');
      }}
      variant="contained">
        {"NEXT >"}
    </Button>
  </ThemeProvider>
  )
}