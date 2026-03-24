import { motion } from "framer-motion";
import {
  Building,
  TrendingUp,
  Globe,
  Briefcase,
  Target,
  Layers,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Hotel Setup & Pre-opening",
    desc: "Complete support from planning to successful hotel launch.",
    icon: <Building size={32} />,
  },
  {
    title: "Sales & Revenue Management",
    desc: "Boost occupancy and maximize revenue with proven strategies.",
    icon: <TrendingUp size={32} />,
  },
  {
    title: "OTA Handling",
    desc: "Manage MakeMyTrip, Goibibo & all major platforms effectively.",
    icon: <Globe size={32} />,
  },
  {
    title: "Corporate Sales",
    desc: "Strong B2B partnerships and contract management.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Branding & Positioning",
    desc: "Create a strong market identity and brand presence.",
    icon: <Target size={32} />,
  },
  {
    title: "End-to-End Solutions",
    desc: "Complete hospitality consulting under one roof.",
    icon: <Layers size={32} />,
  },
];

export default function Services() {
  const navigate = useNavigate(); // ✅ CORRECT PLACE

  return (
    <div className="bg-[#F9F9F9] min-h-screen">

      {/* HERO */}
      <div className="relative h-[40vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold">
          Our Services
        </h1>
      </div>

      {/* SERVICES */}
      <div className="py-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-[#1F3A52] mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-[#D8B384] mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#1F3A52] mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1F3A52] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Hospitality Business?
        </h2>

        <p className="mb-6 text-gray-300">
          Let’s build your success story together.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-[#D8B384] px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
}