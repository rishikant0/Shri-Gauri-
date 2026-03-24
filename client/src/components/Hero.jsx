import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white pt-20">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          className="w-full h-full object-cover"
          alt="hotel"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Transforming Hospitality Into{" "}
          <span className="text-[#D8B384]">Profitable Brands</span>
        </motion.h1>

        <p className="text-md md:text-lg mb-6 text-gray-200">
          Hotel Setup • Revenue Growth • Branding • OTA Management
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#D8B384] px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </button>

          <button
            onClick={() => navigate("/services")}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Services
          </button>
        </div>
      </div>

      {/* ✅ SMALL CURVE (FIXED) */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 500 60" preserveAspectRatio="none">
          <path
            d="M0,0 C150,60 350,0 500,40 L500,60 L0,60 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}