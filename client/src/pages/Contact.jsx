import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={22} />,
    title: "Visit Us",
    lines: ["H-90, Shakarpur,Laxmi Nagar, Delhi - 110092", "India"],
  },
  {
    icon: <Phone size={22} />,
    title: "Call Us",
    lines: ["8808265053"],
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

          {/* Contact Form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                borderRadius: "20px",
                padding: "40px",
                backdropFilter: "blur(15px)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--white)",
                  marginBottom: "30px",
                }}
              >
                Send Us a Message
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="contact-name"
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="contact-email"
                  style={inputStyle}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  id="contact-phone"
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  id="contact-subject"
                  style={inputStyle}
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}
                required
                id="contact-message"
                rows={5}
                style={{ ...inputStyle, resize: "vertical", marginBottom: "24px" }}
              />
              <button
                type="submit"
                className="btn-glow"
                id="contact-submit-btn"
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
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