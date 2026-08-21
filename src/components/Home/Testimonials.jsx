// src/components/Testimonials.jsx
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Star,
  Quote,
  Sparkles,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  const baseTestimonials = [
    {
      name: 'New client',
      role: 'Startup Founder',
      content: 'New client are has convlous view reallved, support more manages cont client to lady for safely cunout this client after you.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=5',
      bgColor: '#eef2ff',
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'This review reviewes hands to reviews review and desler with care and as fant to rask on seeing a tack storing.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=1',
      bgColor: '#f3e8ff',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      content: 'This test card! marketing severts carleft that cofrnmation staras to the review. Buthrng they sanselded that agenry, with revies as solt las a paylner serview.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=2',
      bgColor: '#e1f5fe',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, CreativeSpace',
      content: 'Whils review, cars are ready to Emily Sonlox, a corrict that exidings in intuition, with the aparepy to you.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=3',
      bgColor: '#fff8e1',
    },
    {
      name: 'David Thompson',
      role: 'CTO, DataFlow Systems',
      content: 'This review person order side are so good and provide are support to client atlz and trustworthy client.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=4',
      bgColor: '#e8f5e9',
    }
  ];

  // Screen resize detect karne ke liye taaki mobile par 1 aur desktop par 3 cards dikhein
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

  useEffect(() => {
    setCurrentIndex(baseTestimonials.length);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card-wrapper', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= baseTestimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(baseTestimonials.length);
    } else if (currentIndex < baseTestimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(baseTestimonials.length * 2 - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const activeDotIndex = (currentIndex - baseTestimonials.length + baseTestimonials.length) % baseTestimonials.length;

  return (
    <section ref={sectionRef} className="py-5 bg-light text-dark position-relative overflow-hidden">
      <div className="container py-4">
        {/* Header Section */}
        <div className="text-center text-md-start mb-5">
          <div className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill bg-white shadow-sm text-secondary mb-2" style={{ fontSize: '12px', fontWeight: 600 }}>
            <Sparkles size={14} className="text-warning" />
            Testimonials
          </div>
          <h2 className="fw-bold display-6 mb-2">
            What Our <span style={{ background: 'linear-gradient(135deg, #ff6b00, #ff2770, #873cff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clients Say</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '14px' }}>
            Testimonial agency based structure at least stars with professional agency.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="position-relative">
          <div className="overflow-hidden px-2 py-3">
            <div
              className="d-flex gap-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {testimonials.map((testimonial, index) => {
                const isCenter = cardsPerView === 3 ? index === currentIndex + 1 : index === currentIndex;
                return (
                  <div
                    key={index}
                    className="testimonial-card-wrapper flex-shrink-0"
                    style={{ width: cardsPerView === 3 ? 'calc(33.333% - 1rem)' : '100%' }}
                  >
                    <div
                      className={`card h-100 p-4 rounded-4 border-0 position-relative shadow-sm ${isCenter ? 'shadow-lg border-2' : ''}`}
                      style={{
                        backgroundColor: testimonial.bgColor,
                        transform: cardsPerView === 3 && isCenter ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.4s ease',
                        opacity: cardsPerView === 3 && !isCenter ? 0.75 : 1,
                        zIndex: isCenter ? 2 : 1
                      }}
                    >
                      <div className="mb-3 text-secondary opacity-50">
                        <Quote size={32} />
                      </div>

                      <div className="mb-2 d-flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill={i < testimonial.rating ? '#f59e0b' : 'none'}
                            color="#f59e0b"
                          />
                        ))}
                      </div>

                      <p className="text-dark mb-4" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                        "{testimonial.content}"
                      </p>

                      <div className="d-flex align-items-center gap-3 mt-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle"
                          style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                        />
                        <div>
                          <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '14px' }}>{testimonial.name}</h6>
                          <span className="text-muted" style={{ fontSize: '11px' }}>{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Control Buttons */}
          <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3 mt-4 px-3">
            <button
              onClick={prevSlide}
              className="btn rounded-circle shadow-sm bg-white d-flex align-items-center justify-content-center text-dark border"
              style={{ width: '45px', height: '45px', transition: 'all 0.2s' }}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="btn rounded-circle shadow d-flex align-items-center justify-content-center text-white border-0"
              style={{ width: '45px', height: '45px', backgroundColor: '#6366f1', transition: 'all 0.2s' }}
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
            {baseTestimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(baseTestimonials.length + index)}
                style={{
                  width: index === activeDotIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: index === activeDotIndex ? '#6366f1' : '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;