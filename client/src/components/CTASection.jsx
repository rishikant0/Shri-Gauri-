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
          Ready to <span>Grow Your Hotel?</span>
        </h2>
        <p className="cta__desc">
          Let's transform your hospitality business into a thriving, profitable
          brand. Schedule a free consultation today and discover your property's
          true potential.
        </p>
        <Link to="/contact" className="btn-glow" id="cta-button">
          Schedule Free Consultation
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
