import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Award, Building2, TrendingUp, Target, Zap, ShieldCheck, Mail } from "lucide-react";
import profileImg from "../assets/owner.jpeg";

/**
 * Shri Gauri Hospitality - About Page
 * Features professional content about the founder, expertise, target clients, and work process.
 */

const stats = [
  { number: "250+", label: "Hotels Onboarded", icon: <Building2 size={22} /> },
  { number: "9+", label: "Years Experience", icon: <Award size={22} /> },
  { number: "30%+", label: "Revenue Growth", icon: <TrendingUp size={22} /> },
  { number: "100%", label: "Legal Compliance", icon: <ShieldCheck size={22} /> },
];

const expertise = [
  "Supply Acquisition & Onboarding",
  "Market Expansion (City/Micro-market)",
  "Portfolio Management",
  "Revenue Growth Strategy",
  "Owner Negotiation",
  "Cross-functional Team Coordination",
];

const targetClients = [
  { title: "Independent Hotel Owners", icon: <Building2 size={20} /> },
  { title: "Small Hotel Chains", icon: <Zap size={20} /> },
  { title: "Guest Houses & Boutique Hotels", icon: <Building2 size={20} /> },
  { title: "New Property Developers", icon: <Target size={20} /> },
  { title: "Hospitality Investors", icon: <TrendingUp size={20} /> },
];

const process = [
  { step: "01", title: "Property Analysis", desc: "Deep audit of current operations and potential." },
  { step: "02", title: "Market Research", desc: "Analyzing local competition and demand trends." },
  { step: "03", title: "Strategy Planning", desc: "Custom roadmap for revenue and positioning." },
  { step: "04", title: "Implementation", desc: "Execution of pricing and distribution strategies." },
  { step: "05", title: "Revenue Monitoring", desc: "Daily tracking of performance and demand." },
  { step: "06", title: "Optimization", desc: "Continuous improvement based on data insights." },
];

function About() {
  const [imageError, setImageError] = useState(false);

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
      <section className="hero hero--about" >
        <div className="hero__bg">
          <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32" alt="Luxury hotel" loading="eager" />
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            About the Firm
          </div>
          <h1 className="hero__title">
            Transforming Hospitality <span>Through Strategy</span>
          </h1>
          <p className="hero__subtitle">
            A results-driven consulting firm specializing in hotel setup, 
            revenue optimization, and sustainable business expansion.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section" style={{ background: "var(--navy-900)" }}>
        <div className="why-us__container">
          <div className="why-us__content reveal">
            <span className="why-us__subtitle">✦ Company Overview</span>
            <h2 className="why-us__title">
              Our <span>Mission</span>
            </h2>
            <p className="why-us__desc">
              Shri Gauri Hospitality is a premier consulting firm dedicated to helping independent hotels and small chains maximize their potential. Founded by Abhishek Jaiswal, we bring over 9 years of specialized experience in hospitality supply growth and revenue optimization.
            </p>
            <p className="why-us__desc">
              We focus on building scalable portfolios, improving online visibility through expert OTA management, and driving revenue-led growth for property owners across India.
            </p>
            
            {/* GST & Legal Info */}
            <div style={{ marginTop: "32px", padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <h4 style={{ color: "var(--gold-500)", marginBottom: "12px", fontSize: "1rem" }}>Legal & Registry</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--white-50)", marginBottom: "4px" }}>
                <strong>Business Name:</strong> Shri Gauri Hospitality
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--white-50)", marginBottom: "4px" }}>
                <strong>GSTIN:</strong> 07BFKPJ3203C1Z0
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--white-50)" }}>
                <strong>Type:</strong> Proprietorship (GST Registered)
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--white-50)" }}>
                <strong>Location:</strong> Delhi India
              </p>
            </div>
          </div>
          <div className="why-us__image-wrapper reveal reveal-delay-2">
            <img src="/images/hotel-room.png" alt="Premium hotel interior" />
            <div className="why-us__image-accent"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: "var(--navy-800)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "30px", maxWidth: "1100px", margin: "0 auto" }}>
          {stats.map((stat, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${i + 1}`} style={{ textAlign: "center" }}>
              <div className="service-card__icon" style={{ color: "var(--gold-500)" }}>{stat.icon}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--gold-500)", fontWeight: 700 }}>{stat.number}</div>
              <div style={{ fontSize: "0.9rem", color: "var(--white-50)", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Profile */}
      <section className="section" style={{ background: "var(--navy-900)" }}>
        <div className="why-us__container" style={{ gridTemplateColumns: "0.8fr 1.2fr" }}>
          <div className="reveal">
            <div style={{ 
              position: "relative", 
              borderRadius: "20px", 
              overflow: "hidden", 
              border: "5px solid rgba(255,255,255,0.05)",
              background: "var(--navy-800)",
              minHeight: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}>
             {!imageError ? (
  <img 
    src={profileImg}
    alt="Abhishek Jaiswal"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
    onError={() => setImageError(true)}
  />
) : (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "6rem", color: "gold" }}>AJ</div>
  </div>
)}
              
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "30px 20px", background: "linear-gradient(transparent, rgba(0,0,0,0.9))", textAlign: "center" }}>
                <a 
                  href="https://www.linkedin.com/in/abhishek-jaiswal-a9a682158" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-glow" 
                  style={{ padding: "12px 25px", fontSize: "0.85rem", textDecoration: "none" }}
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2" style={{ paddingLeft: "40px" }}>
            <span className="why-us__subtitle">✦ Expert Leadership</span>
            <h2 className="why-us__title">Meet <span>Abhishek Jaiswal</span></h2>
            <p style={{ color: "var(--gold-500)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "20px" }}>Founder & Principal Consultant</p>
            <p className="why-us__desc">
              With 9+ years of deep-rooted experience in hospitality and business development, Abhishek has been instrumental in building scalable hotel portfolios. Having worked with over 250+ hotel partners (including extensive experience at OYO), he specializes in driving revenue-led growth through strategic onboarding and market expansion.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "24px" }}>
              <div>
                <h4 style={{ color: "var(--white)", marginBottom: "12px", borderLeft: "3px solid var(--gold-500)", paddingLeft: "10px" }}>Core Expertise</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {expertise.slice(0, 3).map((item, i) => (
                    <li key={i} style={{ color: "var(--white-50)", fontSize: "0.9rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={14} color="var(--gold-500)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: "var(--white)", marginBottom: "12px", borderLeft: "3px solid var(--gold-500)", paddingLeft: "10px" }}>Strategy</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {expertise.slice(3).map((item, i) => (
                    <li key={i} style={{ color: "var(--white-50)", fontSize: "0.9rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={14} color="var(--gold-500)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ marginTop: "30px", fontStyle: "italic", color: "var(--white-50)", fontSize: "1rem", borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: "15px" }}>
              "Specialized in building scalable hotel portfolios and driving revenue-led growth."
            </p>
          </div>
        </div>
      </section>

      {/* Target Clients & Process */}
      <section className="section" style={{ background: "var(--navy-800)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", maxWidth: "1100px", margin: "0 auto" }}>
          <div className="reveal">
            <span className="why-us__subtitle">✦ Who We Serve</span>
            <h2 className="why-us__title" style={{ fontSize: "2rem" }}>Target <span>Clients</span></h2>
            <div style={{ marginTop: "30px" }}>
              {targetClients.map((client, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px", padding: "15px", background: "rgba(255,255,255,0.03)", borderRadius: "10px" }}>
                  <div style={{ color: "var(--gold-500)" }}>{client.icon}</div>
                  <span style={{ color: "var(--white)", fontWeight: 500 }}>{client.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="why-us__subtitle">✦ Methodology</span>
            <h2 className="why-us__title" style={{ fontSize: "2rem" }}>Work <span>Process</span></h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "30px" }}>
              {process.map((item, i) => (
                <div key={i} className="service-card" style={{ padding: "20px", textAlign: "left" }}>
                  <span style={{ color: "var(--gold-500)", fontWeight: 800, fontSize: "0.8rem" }}>{item.step}</span>
                  <h4 style={{ color: "var(--white)", margin: "5px 0" }}>{item.title}</h4>
                  <p style={{ color: "var(--white-50)", fontSize: "0.8rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section" style={{ background: "var(--navy-900)" }}>
        <div className="section__header reveal">
          <div className="section__tag">
            <span className="section__tag-line"></span>
            Case Study
            <span className="section__tag-line"></span>
          </div>
          <h2 className="section__title">Proven <span>Success</span></h2>
        </div>
        <div className="reveal reveal-delay-2" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px", background: "var(--glass-bg)", borderRadius: "20px", border: "1px solid var(--glass-border)" }}>
           <h3 style={{ color: "var(--gold-500)", marginBottom: "15px", fontFamily: "var(--font-display)" }}>Hotel Dhankush Residency</h3>
           <p style={{ color: "var(--white)", fontSize: "1.1rem", lineHeight: "1.8" }}>
             "As an independent consultant, I was entrusted with end-to-end responsibility across pricing, OTA distribution, market positioning, and commercial decision-making. The goal was to improve overall revenue performance through strategic market alignment."
           </p>
           <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
              <div style={{ padding: "10px 20px", background: "rgba(181, 148, 88, 0.1)", borderRadius: "5px", border: "1px solid var(--gold-500)" }}>
                <span style={{ color: "var(--gold-500)", fontWeight: 700 }}>+30% Revenue Increase</span>
              </div>
           </div>
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
            Ready to Scale Your <span>Revenue?</span>
          </h2>
          <p className="cta__desc">
            Join 250+ hotel partners who have transformed their property performance with Shri Gauri Hospitality.
          </p>
          <Link to="/contact" className="btn-glow">Book a Consultation</Link>
        </div>
      </section>
    </main>
  );
}

export default About;