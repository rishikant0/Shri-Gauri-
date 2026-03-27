import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add("loaded");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const bg = heroRef.current.querySelector(".hero__bg img");
        if (bg) {
          bg.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero-section">
      <div className="hero__bg">
        <img
          src="/images/hero-bg.png"
          alt="Luxury hotel lobby with golden lighting"
          loading="eager"
        />
      </div>
      <div className="hero__overlay"></div>

      {/* Floating Particles */}
      <div className="hero__particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="hero__particle"></div>
        ))}
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Premium Hospitality Consulting
        </div>

        <h1 className="hero__title">
          Transforming Hospitality Into{" "}
          <span>Profitable Brands</span>
        </h1>

        <p className="hero__subtitle">
          We craft exceptional hotel experiences that drive revenue, elevate
          guest satisfaction, and build iconic hospitality brands across India
          and beyond.
        </p>

        <div className="hero__buttons">
          <Link to="/contact" className="btn-primary" id="hero-contact-btn">
            Contact Us
          </Link>
          <Link to="/services" className="btn-outline" id="hero-services-btn">
            View Services
          </Link>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse"></div>
        <span className="hero__scroll-text">Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;