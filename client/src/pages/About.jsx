import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Award, Users, Building2, TrendingUp } from "lucide-react";

const stats = [
  { number: "200+", label: "Hotels Transformed", icon: <Building2 size={22} /> },
  { number: "15+", label: "Years Experience", icon: <Award size={22} /> },
  { number: "50+", label: "Team Members", icon: <Users size={22} /> },
  { number: "95%", label: "Client Retention", icon: <TrendingUp size={22} /> },
];

const values = [
  {
    title: "Excellence in Everything",
    desc: "We set the highest standards in hospitality consulting, ensuring every project exceeds expectations.",
  },
  {
    title: "Client-Centric Approach",
    desc: "Your success is our success. We tailor every solution to your unique property and market.",
  },
  {
    title: "Innovation-Driven",
    desc: "We stay ahead of industry trends to bring cutting-edge strategies to your hospitality business.",
  },
  {
    title: "Integrity & Trust",
    desc: "Transparent communication and honest partnerships form the foundation of every relationship.",
  },
];

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="about-page">
      {/* Page Hero */}
      <section className="hero" style={{ minHeight: "60vh", height: "60vh" }}>
        <div className="hero__bg">
          <img src="/images/hero-bg.png" alt="Luxury hotel" loading="eager" />
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            About Us
          </div>
          <h1 className="hero__title">
            The Story Behind <span>Shri Gauri Hospitality</span>
          </h1>
          <p className="hero__subtitle">
            A legacy of transforming hospitality businesses into iconic,
            profitable brands across India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: "var(--navy-800)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${i + 1}`} style={{ textAlign: "center" }}>
              <div className="service-card__icon" style={{ color: "var(--gold-500)" }}>
                {stat.icon}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--gold-500)", fontWeight: 700 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--white-50)", marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="section" style={{ background: "var(--navy-900)" }}>
        <div className="why-us__container">
          <div className="why-us__content reveal">
            <span className="why-us__subtitle">✦ Our Story</span>
            <h2 className="why-us__title">
              Building India's Finest <span>Hospitality Brands</span>
            </h2>
            <p className="why-us__desc">
              Founded with a vision to revolutionize the Indian hospitality
              industry, Shri Gauri Hospitality has grown from a small consulting
              firm into one of the country's most trusted hospitality partners.
            </p>
            <p className="why-us__desc">
              Our team of seasoned professionals combines deep industry knowledge
              with innovative strategies to help hotels and resorts achieve
              sustainable growth and unmatched guest satisfaction.
            </p>
          </div>
          <div className="why-us__image-wrapper reveal reveal-delay-2">
            <img src="/images/hotel-room.png" alt="Premium hotel interior" />
            <div className="why-us__image-accent"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--navy-800)" }}>
        <div className="section__header reveal">
          <div className="section__tag">
            <span className="section__tag-line"></span>
            Our Values
            <span className="section__tag-line"></span>
          </div>
          <h2 className="section__title">
            What <span>Drives Us</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {values.map((value, i) => (
            <div key={i} className={`why-us__feature reveal reveal-delay-${i + 1}`}>
              <div className="why-us__feature-icon">
                <Check strokeWidth={3} />
              </div>
              <div className="why-us__feature-text">
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <div className="cta__bg">
          <img src="/images/cta-bg.png" alt="Resort" loading="lazy" />
        </div>
        <div className="cta__overlay"></div>
        <div className="cta__content">
          <h2 className="cta__title">
            Let's Build Something <span>Extraordinary</span>
          </h2>
          <p className="cta__desc">
            Partner with Shri Gauri Hospitality and unlock your property's full potential.
          </p>
          <Link to="/contact" className="btn-glow">Start Your Journey</Link>
        </div>
      </section>
    </main>
  );
}

export default About;