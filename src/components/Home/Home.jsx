import React from "react";
import "./Home.css";
import AboutHero from "./AboutHero";
import WebServicesStats from "./WebServicesStats";
import ProfessionalServices from "./ProfessionalServices";
import Gallery from "./Gallery/Gallery";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Testimonials from "./Testimonials";
import PixsyServices from "./Services/PixsyServices";

export default function Home() {
  return (
    <main>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/slider1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/slider2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/slider3.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <AboutHero />
      <WebServicesStats />
      <ProfessionalServices />
      <Gallery
        items={[
          {
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
            label: 'Web Development',
            link: '/services/web-development',
            alt: 'Web Development Services'
          },
          {
            image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80',
            label: 'SEO Optimization',
            link: '/services/seo',
            alt: 'SEO Optimization Services'
          },
          {
            image: 'https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=1200&q=80',
            label: 'Creative Design',
            link: '/services/design',
            alt: 'Creative Design Services'
          },
          {
            image: 'https://images.unsplash.com/photo-1533750349033-2f716c72690d?auto=format&fit=crop&w=1200&q=80',
            label: 'Digital Marketing',
            link: '/services/marketing',
            alt: 'Digital Marketing Services'
          },
          {
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
            label: 'Security Solutions',
            link: '/services/security',
            alt: 'Security Solutions Services'
          }
        ]}
        defaultIndex={2}
        height={480}
        gap={12}
        radius={16}
        expandRatio={0.52}
        orientation="horizontal"
        duration={0.6}
        parallax={0.4}
        tilt={6}
        grayscale={true}
        showLabels={true}
        trigger="hover"
      />
      <WhyChooseUs />
      <PixsyServices />
      <Process />
      <Testimonials />

    </main>
  );
}