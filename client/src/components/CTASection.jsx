import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta reveal" id="cta-section">
      <div className="cta__bg">
        <img
          src="/images/cta-bg.png"
          alt="Luxury resort aerial view at sunset"
          loading="lazy"
        />
      </div>
      <div className="cta__overlay"></div>

      <div className="cta__content">
        <h2 className="cta__title">
          Scale Your <span>Hotel Revenue</span>
        </h2>
        <p className="cta__desc">
          Join 250+ hotel partners who have transformed their property performance with Shri Gauri Hospitality. Partner with us to unlock your property's full potential.
        </p>
        <Link to="/contact" className="btn-glow" id="cta-button">
          Get Expert Consultation
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
