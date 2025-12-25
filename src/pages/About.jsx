const About = () => {
  return (
    <section className="about-page">

      {/* ABOUT ORGANIZATION */}
      <div className="about-hero">
        <h1>About Yes Eat</h1>
        <p>
          Yes Eat is a meal service built with one simple mission —
          to provide nutritious, hygienic and affordable meals without
          compromising on quality or taste.
        </p>
      </div>

      <div className="about-content">
        <img
          src="/images/about-food.jpg"
          alt="Healthy meals"
          className="about-image"
        />

        <div className="about-text">
          <h2>What We Believe In</h2>
          <p>
            We believe that good food is the foundation of a healthy life.
            Our meals are prepared with care, hygiene, and love —
            just like home.
          </p>

          <ul>
            <li>✔ 30 different meals in 15 days</li>
            <li>✔ No repetition in meals</li>
            <li>✔ Nutritious & balanced diet</li>
            <li>✔ High hygiene standards</li>
            <li>✔ Best quality at best rates</li>
          </ul>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="team-section">
        <h2>Our Team</h2>
        <p>
          Behind Yes Eat is a passionate team that believes
          food should be healthy, affordable, and consistent.
        </p>

        <div className="team-cards">
          <div className="team-card">
            <img src="/images/team-1.jpg" alt="Chef" />
            <h4>Our Chefs</h4>
            <p>Experienced professionals ensuring taste & nutrition.</p>
          </div>

          <div className="team-card">
            <img src="/images/team-2.jpg" alt="Quality" />
            <h4>Quality Team</h4>
            <p>Focused on hygiene, freshness, and safety.</p>
          </div>

          <div className="team-card">
            <img src="/images/team-3.jpg" alt="Delivery" />
            <h4>Delivery Team</h4>
            <p>Ensuring meals reach you fresh and on time.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
