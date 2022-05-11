import React from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BSeeProfile () {
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
        main: '#B145CC'
      },
      action: {
        hover: (106, 24, 168, 1)
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
      <Button id="see_profile_button"
      onClick={() => {
      alert('clicked');
      }}
      variant="contained">
        SEE PROFILE
    </Button>
  </ThemeProvider>
  )
}