import { motion } from "framer-motion";

export default function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center transition hover:shadow-2xl"
    >
      <div className="text-4xl mb-4 text-[#D8B384]">{icon}</div>

      <h3 className="text-xl font-semibold text-[#1F3A52] mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </motion.div>
  );
}