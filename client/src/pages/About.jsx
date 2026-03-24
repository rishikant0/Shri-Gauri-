import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#1F3A52] px-6 py-16">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Shri Gauri Hospitality
        </motion.h1>

        <p className="text-gray-600 text-lg">
          Transforming hospitality businesses into profitable and scalable brands.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4">
            Shri Gauri Hospitality is a professional hospitality consulting firm
            led by Abhishek Jaiswal, specializing in hotel setup, revenue growth,
            and brand positioning.
          </p>

          <p className="text-gray-600">
            We help hotel owners and investors maximize profitability through
            data-driven strategies, OTA management, and strong market presence.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="hotel"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* EXPERIENCE / STATS */}
      <div className="mt-20 bg-[#1F3A52] text-white py-12 rounded-2xl max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 text-center gap-6">

          <div>
            <h3 className="text-3xl font-bold text-[#D8B384]">5+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#D8B384]">50+</h3>
            <p>Hotel Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#D8B384]">40%</h3>
            <p>Average Revenue Growth</p>
          </div>

        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="mt-20 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <div className="bg-gray-50 p-8 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To empower hospitality businesses with innovative strategies,
            maximizing revenue and delivering exceptional guest experiences.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To become a leading hospitality consulting brand recognized for
            excellence, innovation, and results-driven growth.
          </p>
        </div>

      </div>

    </div>
  );
}