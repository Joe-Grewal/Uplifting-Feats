import React from 'react';
import "../styles/App.scss";
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Share from "../images/share.svg";

export default function BShare () {
  const theme = createTheme ({
    typography: {
      fontFamily: [
        "Hoss Round"
      ].join(','),
      fontSize:25,
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
      <div className="large_share_button">
      <Button id="share_button"
      onClick={() => {
      alert('clicked');
      }}
      variant="text"><p className="large_share_text">
        SHARE</p> <img src={Share} alt="share" className="share_image_large"/>
    </Button>
    </div>
  </ThemeProvider>
  )
}