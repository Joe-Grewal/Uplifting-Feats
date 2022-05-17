import React from "react";
import "../styles/App.scss";
import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Share from "../images/share.svg";

import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export default function BShare() {
  const shareUrl = "https://localhost:3000/";

  const theme = createTheme({
    typography: {
      fontFamily: ["Quicksand", "sans-serif"].join(","),
      fontSize: 25,
      fontWeightMedium: 700,
    },
    palette: {
      primary: {
        main: "#6A18A8",
      },
    },
    shadows: {
      0: "none",
    },
  });

  return (
    <>
    <div className="facebook">
      <FacebookShareButton
        url={shareUrl}
        quote="Uplifting Feats"
        hashtag="#UpliftingFeats"
        
      >
        <FacebookIcon size={32} round iconFillColor={'#E32EB0'}/>
      </FacebookShareButton>
      </div>

      <EmailShareButton
        url={shareUrl}
        quote="Uplifting Feats"
        hashtag="#UpliftingFeats"
      >
        <EmailIcon id="email" size={32} round />
      </EmailShareButton>

      <TwitterShareButton
        url={shareUrl}
        quote="Uplifting Feats"
        hashtag="#UpliftingFeats"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </>

    //   <ThemeProvider theme={theme}>
    //     <div className="large_share_button">
    //     <Button id="share_button"
    //     onClick={() => {
    //     alert('clicked');
    //     }}
    //     variant="text"><p className="large_share_text">
    //       SHARE</p> <img src={Share} alt="share" className="share_image_large"/>
    //   </Button>
    //   </div>
    // </ThemeProvider>
  );
}
