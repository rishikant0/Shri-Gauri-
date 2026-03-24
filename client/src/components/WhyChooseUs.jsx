import { motion } from "framer-motion";
import { BarChart3, Briefcase, Target, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Industry Expertise",
    desc: "Years of experience in hospitality consulting and hotel operations.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Revenue Growth",
    desc: "Proven strategies that increase hotel revenue and occupancy.",
    icon: <TrendingUp size={32} />,
  },
  {
    title: "Data-Driven Decisions",
    desc: "Smart analytics and insights to maximize profitability.",
    icon: <BarChart3 size={32} />,
  },
  {
    title: "End-to-End Solutions",
    desc: "Complete support from hotel setup to market positioning.",
    icon: <Target size={32} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1F3A52] to-[#2C5364] text-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-300">
          Delivering excellence in hospitality consulting
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex justify-center mb-4 text-[#D8B384]">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid md:grid-cols-3 text-center gap-8 max-w-5xl mx-auto px-6">
        
        <div>
          <h3 className="text-4xl font-bold text-[#D8B384]">50+</h3>
          <p className="text-gray-300">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#D8B384]">40%</h3>
          <p className="text-gray-300">Average Revenue Growth</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#D8B384]">5+</h3>
          <p className="text-gray-300">Years Experience</p>
        </div>

      </div>
    </section>
  );
}