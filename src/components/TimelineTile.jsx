import React from "react";
import { motion } from "framer-motion";

const TimelineTile = ({ data, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white p-4 rounded-xl shadow-md cursor-pointer transition-all duration-300 h-full"
    onClick={onClick}
  >
    <img
      src={data.image}
      alt={data.title}
      className="w-full h-40 sm:h-48 object-cover rounded mb-3"
    />
    <h3 className="text-base sm:text-lg font-semibold mb-1">{data.title}</h3>
    <p className="text-sm text-gray-600 line-clamp-3">{data.shortDesc}</p>
    <span className="text-blue-600 text-sm font-medium mt-2 inline-block">
      Read more →
    </span>
  </motion.div>
);

export default TimelineTile;
