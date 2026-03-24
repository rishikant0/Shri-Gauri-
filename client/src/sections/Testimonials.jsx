import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Hotel Owner",
    review: "Our revenue increased by 40% within just 3 months!",
  },
  {
    name: "Ankit Verma",
    role: "Resort Manager",
    review: "Highly professional and result-driven consultancy.",
  },
  {
    name: "Priya Singh",
    role: "Investor",
    review: "Best decision for scaling our hospitality business.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F9F9F9] text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#1F3A52] mb-12">
        What Our Clients Say
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            {/* Stars */}
            <div className="flex justify-center mb-3 text-[#D8B384]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#D8B384" />
              ))}
            </div>

            <p className="text-gray-600 italic mb-4">
              "{item.review}"
            </p>

            <h4 className="font-bold text-[#1F3A52]">
              {item.name}
            </h4>

            <p className="text-sm text-gray-500">
              {item.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}