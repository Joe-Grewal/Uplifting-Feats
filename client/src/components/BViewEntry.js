import React from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BViewEntry () {
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
        main: '#B145CC'
      },
      action: {
        hover: (106, 24, 168, 1)
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
      <div className="view_all_entries_button">
      <Button
      onClick={() => {
      alert('clicked');
      }}
      variant="contained">
        VIEW
    </Button>
    </div>
  </ThemeProvider>
  )
}