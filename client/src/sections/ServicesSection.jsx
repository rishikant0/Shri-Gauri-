import ServiceCard from "../components/ServiceCard";
import {
  Building2,
  TrendingUp,
  Handshake,
  ShoppingCart,
  Palette,
  Layers,
  PieChart,
  Network,
  Activity
} from "lucide-react";

/**
 * Enhanced Services Section
 * Reflects professional consulting services as per user's hospitality business experience.
 */

const services = [
  {
    icon: <Building2 size={28} color="#c9a84c" />,
    title: "Hotel Setup & Pre-opening",
    description:
      "Expert guidance for new properties — from site evaluation and licensing to SOP creation and pre-opening launch strategies.",
    delay: 1,
  },
  {
    icon: <TrendingUp size={28} color="#c9a84c" />,
    title: "Revenue & Pricing Strategy",
    description:
      "Data-driven dynamic pricing, yield management, and revenue strategies to maximize ADR and RevPAR performance.",
    delay: 2,
  },
  {
    icon: <ShoppingCart size={28} color="#c9a84c" />,
    title: "OTA & Online Visibility",
    description:
      "Strategic management of MakeMyTrip, Goibibo, Booking.com, and Expedia to boost rankings and online conversion.",
    delay: 3,
  },
  {
    icon: <Handshake size={28} color="#c9a84c" />,
    title: "Corporate & B2B Contracting",
    description:
      "Building strong corporate partnerships and negotiating B2B contracts to ensure consistent, high-yield business streams.",
    delay: 4,
  },
  {
    icon: <Activity size={28} color="#c9a84c" />,
    title: "Performance Optimization",
    description:
      "Deep audits and optimization of property operations to improve guest satisfaction and overall business efficiency.",
    delay: 5,
  },
  {
    icon: <PieChart size={28} color="#c9a84c" />,
    title: "Demand Forecasting",
    description:
      "Advanced market analysis to predict demand trends and align inventory for maximum profitability during peak periods.",
    delay: 6,
  },
  {
    icon: <Network size={28} color="#c9a84c" />,
    title: "Channel Distribution Strategy",
    description:
      "Optimizing your distribution mix across direct and indirect channels to minimize commission costs and maximize profits.",
    delay: 7,
  },
  {
    icon: <Layers size={28} color="#c9a84c" />,
    title: "End-to-End Solutions",
    description:
      "Comprehensive consulting covering operations, marketing, branding, and team training all under one roof.",
    delay: 8,
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
          Driving <span>Market Success</span>
        </h2>
        <p className="section__description">
          Revenue-driven hospitality consulting tailored to transform your property into a market-leading, profitable brand.
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
