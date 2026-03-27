import ServiceCard from "../components/ServiceCard";
import {
  Building2,
  TrendingUp,
  Handshake,
  ShoppingCart,
  Palette,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: <Building2 size={28} color="#c9a84c" />,
    title: "Hotel Setup & Pre-opening Support",
    description:
      "Complete guidance from concept to launch — site evaluation, licensing, staffing, SOP creation, and pre-opening strategies for a flawless hotel debut.",
    delay: 1,
  },
  {
    icon: <TrendingUp size={28} color="#c9a84c" />,
    title: "Sales & Revenue Management",
    description:
      "Data-driven pricing strategies, demand forecasting, and yield management to maximize occupancy rates and revenue per available room.",
    delay: 2,
  },
  {
    icon: <ShoppingCart size={28} color="#c9a84c" />,
    title: "OTA Handling",
    description:
      "Expert management of MakeMyTrip, Goibibo, Booking.com, and other OTA platforms to boost online visibility, rankings, and direct bookings.",
    delay: 3,
  },
  {
    icon: <Handshake size={28} color="#c9a84c" />,
    title: "Corporate Sales & Contracting",
    description:
      "Building strong B2B partnerships, negotiating corporate contracts, and securing long-term business accounts for consistent revenue streams.",
    delay: 4,
  },
  {
    icon: <Palette size={28} color="#c9a84c" />,
    title: "Branding & Market Positioning",
    description:
      "Crafting distinctive brand identities, visual storytelling, and strategic positioning that captivate premium travelers and set you apart.",
    delay: 5,
  },
  {
    icon: <Layers size={28} color="#c9a84c" />,
    title: "End-to-End Hospitality Solutions",
    description:
      "Comprehensive management covering operations, guest experience, digital marketing, staff training, and performance analytics — all under one roof.",
    delay: 6,
  },
];

function ServicesSection() {
  return (
    <section className="section services" id="services-section">
      <div className="section__header reveal">
        <div className="section__tag">
          <span className="section__tag-line"></span>
          Our Services
          <span className="section__tag-line"></span>
        </div>
        <h2 className="section__title">
          What We <span>Offer</span>
        </h2>
        <p className="section__description">
          Comprehensive hospitality solutions tailored to transform your
          property into a market-leading, profitable brand.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
