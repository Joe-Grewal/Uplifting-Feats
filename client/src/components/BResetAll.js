import React from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BResetAll (props) {

  const theme = createTheme ({
    typography: {
      fontFamily: [
        'Quicksand', 'sans-serif',
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
    // shadows: {
    //   0: "none"
    // }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
      onClick = {props.onClick}
          type="submit"
      variant="contained">
        RESET ALL
    </Button>
  </ThemeProvider>
  )
}