const Hero = () => {
  return (
    <section className="hero">
      <video
  className="hero-video"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="/images/hero-poster.jpg"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
    </section>
  );
};

export default Hero;
