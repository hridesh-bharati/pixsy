import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cards from "./CardFeatures/Cards";
import AboutHero from "./AboutHero";
import ProfessionalServices from "./ProfessionalServices";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Testimonials from "./Testimonials";
import PixsyServices from "./Services/PixsyServices";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main>
      {/* Bootstrap Carousel with a 2-second delay and navigation buttons removed */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/slider0.png" className="d-block w-100 carousel-img" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/slider1.png" className="d-block w-100 carousel-img" alt="Slide 2" />
          </div>
        </div>
      </div>

      <div data-aos="fade-up"><Cards /></div>
      <div data-aos="fade-up"><AboutHero /></div>
      <div data-aos="fade-up"><ProfessionalServices /></div>
      <div data-aos="fade-up"><WhyChooseUs /></div>
      <div data-aos="fade-up"><PixsyServices /></div>
      <div data-aos="fade-up"><Process /></div>
      <div data-aos="fade-up"><Testimonials /></div>
    </main>
  );
}