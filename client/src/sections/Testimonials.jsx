import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Management Team",
    role: "Hotel Padam Residency",
    text: "Shri Gauri Hospitality's expertise in pricing and OTA distribution has significantly improved our market positioning.",
  },
  {
    name: "Arvind Kumar",
    role: "Owner, Red Daimond Hotel",
    text: "Partnering with Abhishek was a game-changer. Our revenue increased by 30% after implementing his strategy.",
  },
  {
    name: "Sanjay Sharma",
    role: "Director, Sunshine Hotels",
    text: "End-to-end support helped us focus on guest experience while they handled revenue growth perfectly.",
  },
  {
    name: "Vikram Rathore",
    role: "Property Manager",
    text: "Expertise in OTA growth and market expansion is unmatched. They deliver measurable results.",
  },
  {
    name: "Neha Gupta",
    role: "Hotel Olivia inn",
    text: "Clear roadmap and transparency helped us achieve ROI faster than expected.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;
  const maxIndex = testimonials.length - cardsPerView;

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="testimonials">

      {/* 🔥 TITLE */}
      <div className="testimonials__header">
        <p className="subtitle">RECENT VISITS & REVIEWS</p>
        <h2>
          Partner <span>Success Stories</span>
        </h2>
        <p className="desc">
          Real feedback from hotel owners and management teams.
        </p>
      </div>

      {/* 🔥 SLIDER */}
      <div className="testimonials__track">
        <div
          className="testimonials__wrapper"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              style={{
                minWidth: `${100 / cardsPerView}%`,
                padding: "15px",
              }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CONTROLS */}
      <div className="testimonials__controls">
        <button onClick={prev}>
          <ChevronLeft />
        </button>

        <div className="dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span
              key={i}
              className={i === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>

        <button onClick={next}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;