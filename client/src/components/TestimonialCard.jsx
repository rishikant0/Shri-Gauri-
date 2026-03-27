import { Star } from "lucide-react";

function TestimonialCard({ name, role, text, avatar, rating = 5 }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="testimonial-card__star" size={16} fill="currentColor" />
        ))}
      </div>
      <div className="testimonial-card__quote">"</div>
      <p className="testimonial-card__text">{text}</p>
      <div className="testimonial-card__author">
        <img src={avatar} alt={name} className="testimonial-card__avatar" />
        <div>
          <div className="testimonial-card__name">{name}</div>
          <div className="testimonial-card__role">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;