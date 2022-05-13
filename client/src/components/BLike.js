import React from 'react';
import "../styles/App.scss";
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Like from "../images/like.svg";

export default function BLike () {
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
    shadows: {
      0: "none"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="large_like_button">
      <Button id="like_button"
      onClick={() => {
      alert('clicked');
      }}
      variant="text"><p className="large_like_text">
        LIKE</p> <img src={Like} alt="like" className="like_image_large"/>
    </Button>
    </div>
  </ThemeProvider>
  )
}