import React from "react";
import Share from "../images/share.svg";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
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

      <EmailShareButton
        url={shareUrl}
        quote="Uplifting Feats"
        hashtag="#UpliftingFeats"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>

      <TwitterShareButton
        url={shareUrl}
        quote="Uplifting Feats"
        hashtag="#UpliftingFeats"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </>

    //   <div className="like_small_container">

    //       <div className="small_share_image">
    //       <img src={Share} alt="share"/>
    //       </div>

    //       <div className="number_of_likes">
    //       <p className="num_of_shares">12345<span className="likes_pink"> SHARES</span></p>
    //       </div>

    //  </div>
  );
}
