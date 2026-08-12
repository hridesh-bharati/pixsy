import React, { useRef, useEffect } from 'react';
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
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Pixsy Media transformed our online presence completely. Our traffic increased by 200% and conversions tripled within 3 months.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=1'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthHub',
      content: 'The team at Pixsy Media is exceptional. They understood our vision and delivered beyond expectations. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=2'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, CreativeSpace',
      content: 'Working with Pixsy Media was a game-changer for our business. Their expertise in web development and SEO is unmatched.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=3'
    },
    {
      name: 'David Thompson',
      role: 'CTO, DataFlow Systems',
      content: 'Pixsy Media delivered a robust, scalable solution for our complex requirements. Their technical expertise is world-class.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=4'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Testimonials
          </span>
          <h2>What Our <span className="gradient-text">Clients Say</span></h2>
          <p>Real feedback from real clients who trusted us with their projects</p>
        </div>

        <div className="testimonials-slider" ref={sliderRef}>
          <div className="testimonials-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">
                  <Quote size={40} className="quote-icon" />
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < testimonial.rating ? '#ff8a00' : 'none'} />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button onClick={prevSlide} className="control-btn">
              <ArrowLeft size={20} />
            </button>
            <div className="dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="control-btn">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;