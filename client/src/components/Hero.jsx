import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const heroRef = useRef(null);

  // Smooth load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      heroRef.current?.classList.add("loaded");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero-section">
      {/* BACKGROUND */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
          alt="Luxury hotel"
          loading="eager"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="hero__overlay"></div>

      {/* PARTICLES */}
      <div className="hero__particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="hero__particle"></div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Premium Hospitality Consulting
        </div>

        <h1 className="hero__title">
          Driving Hotel Growth Through <span>Strategy & Revenue</span>
        </h1>

        <p className="hero__subtitle">
          9+ years of experience in building scalable hotel portfolios,
          onboarding 250+ partners, and driving revenue-led growth across India.
        </p>

        <div className="hero__buttons">
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link to="/services" className="btn-outline">
            View Services
          </Link>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;