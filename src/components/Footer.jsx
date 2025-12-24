const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>E-Mail : yeseat2026@gmail.com</p>
          <p>Phone : +91 7756955942</p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Privacy Policy</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
