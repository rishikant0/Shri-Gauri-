import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

/* Custom SVG icons for social media (deprecated in lucide-react) */
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer__container">
        {/* Brand */}
        <div>
          <div className="footer__brand-name">Shri Gauri Hospitality</div>
          <p className="footer__brand-desc">
            Transforming hospitality into profitable brands. We partner with
            hotels and resorts across India to deliver exceptional guest
            experiences and sustainable growth.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="footer__social-icon" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-jaiswal-a9a682158/" className="footer__social-icon" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="#" className="footer__social-icon" aria-label="Twitter">
              <TwitterIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer__column-title">Quick Links</h4>
          <div className="footer__links">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/about" className="footer__link">About Us</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="footer__column-title">Services</h4>
          <div className="footer__links">
            <span className="footer__link">Hotel Consulting</span>
            <span className="footer__link">Brand Strategy</span>
            <span className="footer__link">Revenue Management</span>
            <span className="footer__link">Digital Marketing</span>
            <span className="footer__link">Staff Training</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer__column-title">Contact Us</h4>
          <div className="footer__contact-item">
            <MapPin size={16} className="footer__contact-icon" />
            <span>H-90, Shakarpur, Laxmi Nagar, Delhi-110092</span>
          </div>
          <div className="footer__contact-item">
            <Phone size={16} className="footer__contact-icon" />
            <span>+91 8808265053</span>
          </div>
          <div className="footer__contact-item">
            <Mail size={16} className="footer__contact-icon" />
            <span>jabhishek287@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Shri Gauri Hospitality. All rights
          reserved.
        </p>
        <div className="footer__bottom-links">
          <a href="#" className="footer__bottom-link">Privacy Policy</a>
          <a href="#" className="footer__bottom-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;