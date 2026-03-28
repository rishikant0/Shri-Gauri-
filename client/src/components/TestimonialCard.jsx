import React from "react";
import { Star } from "lucide-react";

function TestimonialCard({ name, role, text, rating = 5 }) {
  return (
    <div className="testimonial-card">

      {/* ⭐ STARS */}
      <div className="testimonial-card__stars">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} fill="#D8B384" color="#D8B384" />
        ))}
      </div>

      {/* 💬 QUOTE ICON */}
      <div className="testimonial-card__quote">❝</div>

      {/* TEXT */}
      <p className="testimonial-card__text">{text}</p>

      {/* AUTHOR */}
      <div className="testimonial-card__author">
        {/* <img src={avatar} alt={name} className="testimonial-card__avatar" /> */}

        <div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>

    </div>
  );
}

export default TestimonialCard;