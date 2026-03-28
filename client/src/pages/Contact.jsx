import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={22} />,
    title: "Visit Us",
    lines: ["H-90, Shakarpur, Laxmi Nagar", "Delhi - 110092, India"],
  },
  {
    icon: <Phone size={22} />,
    title: "Call Us",
    lines: ["+91 8808265053"],
  },
  {
    icon: <Mail size={22} />,
    title: "Email Us",
    lines: ["jabhishek287@gmail.com"],
  },
  {
    icon: <Clock size={22} />,
    title: "Working Hours",
    lines: ["Mon - Fri: 9AM - 7PM", "Sat: 10AM - 4PM"],
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main id="contact-page">
      {/* Page Hero */}
      <section className="hero" style={{ minHeight: "60vh", height: "60vh" }}>
        <div className="hero__bg">
          <img src="/images/cta-bg.png" alt="Luxury resort" loading="eager" />
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Contact Us
          </div>
          <h1 className="hero__title">
            Let's Start <span>Your Journey</span>
          </h1>
          <p className="hero__subtitle">
            Ready to transform your hospitality business? Get in touch with our
            team of experts today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ background: "var(--navy-800)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "60px",
            maxWidth: "1100px",
            margin: "0 auto",
            alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <div className="reveal">
            <span className="why-us__subtitle">✦ Get In Touch</span>
            <h2 className="why-us__title" style={{ marginBottom: "16px" }}>
              We'd Love To <span>Hear From You</span>
            </h2>
            <p className="why-us__desc">
              Whether you have a question about our services, pricing, or
              anything else, our team is ready to answer all your questions.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "32px" }}>
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="service-card"
                  style={{ padding: "24px 20px", textAlign: "left" }}
                >
                  <div
                    className="service-card__icon"
                    style={{
                      margin: "0 0 12px 0",
                      width: "48px",
                      height: "48px",
                      fontSize: "1.2rem",
                      color: "var(--gold-500)",
                    }}
                  >
                    {info.icon}
                  </div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--white)", marginBottom: "8px" }}>
                    {info.title}
                  </h4>
                  {info.lines.map((line, j) => (
                    <p key={j} style={{ fontSize: "0.85rem", color: "var(--white-50)", lineHeight: 1.6 }}>
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Consultant Profile (Business Card Style) */}
          <div className="reveal reveal-delay-2">
            <div
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                borderRadius: "20px",
                padding: "50px",
                backdropFilter: "blur(15px)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "var(--gold-500)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--navy-800)",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  fontFamily: "var(--font-display)",
                  marginBottom: "8px",
                  boxShadow: "0 0 20px rgba(181, 148, 88, 0.4)",
                  border: "4px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                AJ
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--white)",
                    marginBottom: "8px",
                    letterSpacing: "1px",
                  }}
                >
                  ABHISHEK JAISWAL
                </h3>
                <p
                  style={{
                    color: "var(--gold-500)",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Hospitality Business & Revenue Consultant
                </p>
              </div>

              <div
                style={{
                  width: "60px",
                  height: "2px",
                  background: "var(--gold-500)",
                  margin: "10px 0",
                }}
              ></div>

              <p
                style={{
                  color: "var(--white-50)",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  maxWidth: "400px",
                }}
              >
                Expert guidance in revenue management, brand strategy, and
                operational excellence for luxury hotels and resorts across New
                Delhi and India.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <a
                  href="https://www.shrigaurihospitality.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    textDecoration: "none",
                  }}
                >
                  Visit Website
                </a>
                <a
                  href="mailto:jabhishek287@gmail.com"
                  className="btn-outline"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    textDecoration: "none",
                    padding: "16px",
                  }}
                >
                  <Mail size={18} />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  color: "rgba(255, 255, 255, 0.9)",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  transition: "all 0.3s ease",
};

export default Contact;