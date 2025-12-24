const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default Hero;
