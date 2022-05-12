import React from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BUpdateProfile () {
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
      <div className="update_profile_button">
      <Button
        href='update_profile'
        variant="contained">
        UPDATE PROFILE
      </Button>
    </div>
  </ThemeProvider>
  )
}