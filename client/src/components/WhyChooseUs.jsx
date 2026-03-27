import { Check } from "lucide-react";

const features = [
  {
    title: "Industry Expertise",
    desc: "Over 15+ years of experience transforming hotels and resorts into market leaders.",
  },
  {
    title: "Revenue Growth",
    desc: "Proven strategies that increase occupancy rates and maximize revenue per room.",
  },
  {
    title: "Brand Building",
    desc: "Creating unique brand identities that resonate with premium travelers.",
  },
  {
    title: "End-to-End Solutions",
    desc: "From concept to operations — we handle every aspect of hospitality management.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section why-us" id="why-choose-us">
      <div className="why-us__container">
        <div className="why-us__image-wrapper reveal">
          <img
            src="/images/hotel-room.png"
            alt="Luxury hotel room with panoramic city view"
          />
          <div className="why-us__image-accent"></div>
          <div className="why-us__stats-badge">
            <span className="why-us__stats-number">200+</span>
            <span className="why-us__stats-text">
              Hotels<br />Transformed
            </span>
          </div>
        </div>

        <div className="why-us__content reveal reveal-delay-2">
          <span className="why-us__subtitle">
            ✦ Why Choose Us
          </span>
          <h2 className="why-us__title">
            We Build Hotels That <span>Guests Remember</span>
          </h2>
          <p className="why-us__desc">
            At Shri Gauri Hospitality, we don't just consult — we partner with
            you to create extraordinary hotel experiences that drive lasting
            profitability and brand loyalty.
          </p>

          <div className="why-us__features">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`why-us__feature reveal reveal-delay-${index + 2}`}
              >
                <div className="why-us__feature-icon">
                  <Check strokeWidth={3} />
                </div>
                <div className="why-us__feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;