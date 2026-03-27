import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesSection from "../sections/ServicesSection";
import CTASection from "../components/CTASection";

function Services() {
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
    <main id="services-page">
      {/* Page Hero */}
      <section className="hero" style={{ minHeight: "60vh", height: "60vh" }}>
        <div className="hero__bg">
          <img src="/images/hero-bg.png" alt="Luxury hotel" loading="eager" />
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Our Services
          </div>
          <h1 className="hero__title">
            Comprehensive <span>Hospitality Solutions</span>
          </h1>
          <p className="hero__subtitle">
            From strategy to execution, we provide end-to-end services that
            transform your hospitality business.
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* Process Section */}
      <section className="section" style={{ background: "var(--navy-900)" }}>
        <div className="section__header reveal">
          <div className="section__tag">
            <span className="section__tag-line"></span>
            Our Process
            <span className="section__tag-line"></span>
          </div>
          <h2 className="section__title">
            How We <span>Work</span>
          </h2>
          <p className="section__description">
            A proven 4-step methodology that delivers consistent, measurable
            results for every property we partner with.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            { step: "01", title: "Discovery", desc: "We analyze your property, market, and competition to identify growth opportunities." },
            { step: "02", title: "Strategy", desc: "Custom strategies are crafted based on data-driven insights and industry best practices." },
            { step: "03", title: "Execution", desc: "Our team implements solutions with precision, from branding to operations optimization." },
            { step: "04", title: "Growth", desc: "Continuous monitoring and refinement ensure sustained growth and market leadership." },
          ].map((item, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${i + 1}`}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, var(--gold-500), var(--gold-300))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {item.step}
              </div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}

export default Services;