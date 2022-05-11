import React from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BBackToProfile () {
  const theme = createTheme ({
    typography: {
      fontFamily: [
        "Hoss Round"
      ].join(','),
      fontSize: 22,
      fontWeightMedium:700,
    },
    palette: {
      primary: {
        main: '#6A18A8'
      }
    },
    shape: {
      borderRadius: 20
    },
    shadows: {
      0: "none"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button id="back_to_profile_button"
      onClick={() => {
      alert('clicked');
      }}
      variant="contained">
        BACK TO PROFILE
    </Button>
  </ThemeProvider>
  )
}