import { motion } from "framer-motion";

export default function TestimonialCard({ name, role, review }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <p className="text-gray-600 italic mb-4">
        "{review}"
      </p>

      <div>
        <h4 className="font-bold text-[#1F3A52]">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
}