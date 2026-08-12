import React from "react";
import "./Home.css";
import AboutHero from "./AboutHero";
import WebServicesStats from "./WebServicesStats";

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
    </main>
  );
}