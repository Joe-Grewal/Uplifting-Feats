import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export default function Share_small() {
  const shareUrl = "https://localhost:3000/";
  return (
    <>
      <FacebookShareButton
        url={shareUrl}
        quote="Uplifting Feats"
        hashtag="#UpliftingFeats"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={shareUrl}
        quote="Uplifting Feats"
        hashtag="#UpliftingFeats"
      >
        <TwitterIcon id="email" size={32} round />
      </TwitterShareButton>

      <PinterestShareButton
        url={shareUrl}
        quote="Uplifting Feats"
        hashtag="#UpliftingFeats"
      >
        <PinterestIcon size={32} round iconFillColor={"white"} />
      </PinterestShareButton>
    </>
  );
}
