const Contact = () => {
  return (
    <section className="contact-page">

      {/* HEADER */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us for meal plans, collaborations,
          or any queries about Yes Eat.
        </p>
      </div>

      {/* CONTACT PERSONS */}
      <div className="contact-cards">

        <div className="contact-card">
          <h3>Chaitanya Thormothe</h3>
          <p className="contact-role">Founder & CEO</p>
          <p>
            📧 <a href="mailto:chaitanya@yeseat.in">chaitanya@yeseat.in</a>
          </p>
          <p>
            📞 <a href="tel:+919579789400">+91 9579789400</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Aditya Kuwar</h3>
          <p className="contact-role">Founder & CEO</p>
          <p>
            📧 <a href="mailto:aditya@yeseat.in">aditya@yeseat.in</a>
          </p>
          <p>
            📞 <a href="tel:+919130598926">+91 9130598926</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Ritesh Shevare</h3>
          <p className="contact-role">Founder & CEO</p>
          <p>
            📧 <a href="mailto:ritesh@yeseat.in">ritesh@yeseat.in</a>
          </p>
          <p>
            📞 <a href="tel:+917756955942">+91 7756955942</a>
          </p>
        </div>

      </div>

      {/* CONTACT FORM */}
      <div className="contact-form-wrapper">
        <h2>Send Us a Message</h2>

        <form
          action="mailto:chaitanya@yeseat.in,aditya@yeseat.in,ritesh@yeseat.in"
          method="POST"
          encType="text/plain"
          className="contact-form"
        >
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea
            name="Message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
};

export default Contact;
