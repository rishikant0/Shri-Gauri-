import { useEffect } from "react";
import Hero from "../components/Hero";
import ServicesSection from "../sections/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../sections/Testimonials";
import CTASection from "../components/CTASection";

function Home() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="home-page">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}

export default Home;