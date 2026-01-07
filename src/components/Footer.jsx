import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div>
          <h4>Contact Us</h4>
          <p>Email: yeseat2026@gmail.com</p>
          <p>Phone: +91 7756955942</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <p>
            <a href="https://www.instagram.com/yes_eat_2026/?hl=en" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <p>
            <Link to="/about" className="footer-link">
              About Us
            </Link>
          </p>
          <p>Privacy Policy</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
