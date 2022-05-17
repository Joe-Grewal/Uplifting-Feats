import React from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BBackToProfile (props) {
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
        main: '#6A18A8'
      }
    },
    shape: {
      borderRadius: 20
    },
    // shadows: {
    //   0: "none"
    // }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button id="back_to_profile_button"
      onClick={props.onClick}
      variant="contained">
        BACK TO PROFILE
    </Button>
  </ThemeProvider>
  )
}