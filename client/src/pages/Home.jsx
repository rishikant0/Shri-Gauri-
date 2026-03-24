import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../sections/Testimonials";


export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />


      <div className="bg-white pt-10">
        <WhyChooseUs />
      </div>

      <Testimonials />
    </div>
  );
}