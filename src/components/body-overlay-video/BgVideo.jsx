function BgVideo() {
  return (
    <video autoPlay loop muted className="body-overlay">
      <source src="/videos/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default BgVideo;
