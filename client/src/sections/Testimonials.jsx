import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Owner, Grand Palace Hotel",
    text: "Shri Gauri Hospitality transformed our struggling property into a 4-star destination. Their revenue strategies increased our occupancy by 45% in just 6 months. Truly exceptional work.",
    avatar: "/images/user1.png",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, Coastal Resorts",
    text: "The branding and marketing expertise they brought to our resort was game-changing. Our online bookings tripled and guest satisfaction scores reached an all-time high.",
    avatar: "/images/user2.png",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "CEO, Heritage Hotels Group",
    text: "Working with Shri Gauri was the best business decision we made. Their team understands hospitality at the deepest level. Our brand now stands among India's finest heritage hotels.",
    avatar: "/images/user3.png",
    rating: 5,
  },
  {
    name: "Rajesh Mehta",
    role: "Owner, Grand Palace Hotel",
    text: "From staff training to digital transformation — they handled it all. Our hotel saw a 60% increase in revenue within the first year. Highly recommended for any hotel owner.",
    avatar: "/images/user1.png",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, Coastal Resorts",
    text: "Their attention to detail in every aspect of hospitality management is unmatched. They don't just consult — they become a part of your team and vision.",
    avatar: "/images/user2.png",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "CEO, Heritage Hotels Group",
    text: "Shri Gauri's strategic approach to hotel operations helped us streamline costs while dramatically improving guest experiences. A true partner in growth.",
    avatar: "/images/user3.png",
    rating: 5,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const autoplayRef = useRef(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 768) setCardsPerView(1);
      else if (window.innerWidth <= 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);
  const totalDots = maxIndex + 1;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto scroll
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [next]);

  const cardWidthPercent = 100 / cardsPerView;
  const gapPx = 30;
  const translateX = currentIndex * (cardWidthPercent + (gapPx / cardsPerView));

  return (
    <section className="section testimonials" id="testimonials-section">
      <div className="section__header reveal">
        <div className="section__tag">
          <span className="section__tag-line"></span>
          Testimonials
          <span className="section__tag-line"></span>
        </div>
        <h2 className="section__title">
          What Our <span>Clients Say</span>
        </h2>
        <p className="section__description">
          Don't just take our word for it — hear from hotel owners who trusted
          us to transform their businesses.
        </p>
      </div>

      <div className="testimonials__slider reveal reveal-delay-2">
        <div className="testimonials__track">
          <div
            className="testimonials__wrapper"
            style={{
              transform: `translateX(-${translateX}%)`,
              width: `${(testimonials.length / cardsPerView) * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="testimonials__controls">
          <button className="testimonials__btn" onClick={prev} id="testimonial-prev-btn">
            <ChevronLeft size={20} />
          </button>
          <div className="testimonials__dots">
            {Array.from({ length: totalDots }).map((_, i) => (
              <div
                key={i}
                className={`testimonials__dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
              ></div>
            ))}
          </div>
          <button className="testimonials__btn" onClick={next} id="testimonial-next-btn">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;