import React from "react";

function BgVideo() {
  return (
    <video autoPlay loop muted className="body-overlay ">
      <source src="/src/assets/videos/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      <p>Video not supported</p>
    </video>
  );
}

export default BgVideo;
