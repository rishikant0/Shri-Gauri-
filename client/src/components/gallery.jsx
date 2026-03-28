import React from "react";
import { motion } from "framer-motion";
import cl1 from "../assets/cl1.jpeg";
import cl2 from "../assets/cl2.jpeg";
import cl3 from "../assets/cl3.jpeg";
import cl4 from "../assets/cl4.jpeg";
import cl5 from "../assets/cl5.jpeg";
import cl6 from "../assets/cl6.jpeg";
import cl7 from "../assets/cl7.jpeg";
import cl8 from "../assets/cl8.jpeg";
import cl9 from "../assets/cl9.jpeg";

const images = [
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
  cl9
];

function Gallery() {
  return (
    <section className="gallery">
      
      {/* HEADER */}
      <div className="gallery__header">
        <p className="subtitle">OUR VISITS & WORK</p>
        <h2>
          Explore Our <span>Gallery</span>
        </h2>
        <p className="desc">
          Real moments from hotel visits, consulting, and client success.
        </p>
      </div>

      {/* GRID */}
      <div className="gallery__grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery__item"
            whileHover={{ scale: 1.05 }}
          >
            <img src={img} alt="gallery" />
            <div className="overlay">
              <span>View</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;