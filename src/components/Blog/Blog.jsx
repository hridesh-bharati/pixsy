import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Calendar,
  User,
  ArrowRight,
  Search,
  BookOpen,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards Stagger Animation
      gsap.from('.blog-card-item', {
        scrollTrigger: {
          trigger: '.blog-grid-wrapper',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = ['All', 'Web Dev', 'SEO & Marketing', 'UI/UX Design', 'Security'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Full-Stack Web Development in 2026',
      excerpt: 'Explore how React, Next.js, and serverless architectures are reshaping high-performance web applications.',
      category: 'Web Dev',
      author: 'Hridesh Bharati',
      date: 'Aug 10, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      color: '#ff8a00'
    },
    {
      id: 2,
      title: 'Advanced SEO Strategies to Dominate Google Rankings',
      excerpt: 'Master technical SEO, Core Web Vitals, and data-driven content marketing to skyrocket organic traffic.',
      category: 'SEO & Marketing',
      author: 'Ajay Tiwari',
      date: 'Aug 05, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      color: '#ff315c'
    },
    {
      id: 3,
      title: 'Why UI/UX Design Matters for E-Commerce Conversion',
      excerpt: 'Learn how micro-interactions, clean layouts, and friction-free checkouts double your online sales.',
      category: 'UI/UX Design',
      author: 'Emily Rodriguez',
      date: 'July 28, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      color: '#d21cff'
    },
    {
      id: 4,
      title: 'Securing Your Web Apps: Best Practices for Developers',
      excerpt: 'Protect enterprise applications against SQL injection, XSS attacks, and unauthorized data breaches.',
      category: 'Security',
      author: 'Santosh Chauhan',
      date: 'July 20, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      color: '#3b4cff'
    },
    {
      id: 5,
      title: 'Scaling PHP and MySQL Databases for High Traffic',
      excerpt: 'Optimize backend query performance, indexing, and connection pooling for high-volume transactions.',
      category: 'Web Dev',
      author: 'Manjesh Vishwakarma',
      date: 'July 15, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80',
      color: '#1267ff'
    },
    {
      id: 6,
      title: 'Leveraging Google Looker Studio for Client Reporting',
      excerpt: 'Build automated, real-time client analytics dashboards combining Google Analytics and Search Console data.',
      category: 'SEO & Marketing',
      author: 'Hridesh Bharati',
      date: 'July 10, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      color: '#ff8a00'
    }
  ];

  // Filter blog posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={sectionRef} className="blog-page-wrapper">

      {/* HERO BANNER */}
      <section className="blog-page-hero text-center position-relative py-5">
        <div className="blog-bg-circle blog-bg-circle-1"></div>
        <div className="blog-bg-circle blog-bg-circle-2"></div>
        <div className="blog-grid-pattern"></div>

        <div className="container position-relative z-2 py-4">
          <span className="blog-hero-badge px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2 mb-3">
            <Sparkles size={14} />
            Our Insights & Articles
          </span>
          <h1 className="display-4 fw-900 text-dark mb-3">
            Latest News & <span className="blog-gradient-text">Tech Blog</span>
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '650px' }}>
            Discover expert guides, industry insights, and cutting-edge software development trends from the team at Pixsy Media.
          </p>

          {/* Search Bar */}
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <div className="input-group shadow-sm rounded-pill overflow-hidden border">
                <span className="input-group-text bg-white border-0 ps-4 text-muted">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className="form-control border-0 py-3 shadow-none"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="py-4 bg-white border-bottom sticky-top shadow-sm" style={{ top: '70px', zIndex: 10 }}>
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`btn px-4 py-2 rounded-pill fw-bold text-sm transition-all ${selectedCategory === cat ? 'btn-dark shadow' : 'btn-light text-muted'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID SECTION */}
      <section className="py-5 bg-light position-relative">
        <div className="container py-4">
          <div className="row g-4 blog-grid-wrapper">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="col-md-4 col-sm-6">
                  <div className="blog-card-item h-100 rounded-4 position-relative overflow-hidden bg-white border d-flex flex-column" style={{ '--card-color': post.color }}>
                    <div className="blog-card-flare"></div>

                    {/* Blog Image */}
                    <div className="blog-img-wrapper position-relative overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-100 object-fit-cover" style={{ height: '220px', transition: 'transform 0.5s ease' }} />
                      <span className="badge position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill fw-bold text-white shadow-sm" style={{ background: post.color }}>
                        {post.category}
                      </span>
                    </div>

                    {/* Blog Content */}
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex align-items-center gap-3 text-muted small mb-2">
                        <span className="d-flex align-items-center gap-1"><Calendar size={13} /> {post.date}</span>
                        <span className="d-flex align-items-center gap-1"><Clock size={13} /> {post.readTime}</span>
                      </div>

                      <h3 className="h5 fw-bold text-dark mb-2">{post.title}</h3>
                      <p className="text-muted small mb-4 flex-grow-1">{post.excerpt}</p>

                      <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
                        <span className="small fw-bold text-secondary d-flex align-items-center gap-1">
                          <User size={13} /> {post.author}
                        </span>
                        <Link to={`/blog/${post.id}`} className="blog-read-more text-decoration-none fw-bold d-inline-flex align-items-center gap-1" style={{ color: post.color }}>
                          <span>Read More</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <BookOpen size={48} className="text-muted mb-3 opacity-50" />
                <h4 className="text-dark fw-bold">No articles found</h4>
                <p className="text-muted">Try searching with a different keyword or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-5 text-center bg-white border-top">
        <div className="container py-4">
          <h3 className="fw-bold mb-3">Want to collaborate or share an idea?</h3>
          <p className="text-muted mb-4">Reach out to our experts and let's create impactful digital solutions together.</p>
          <Link to="/contact-us" className="btn btn-dark px-5 py-3 rounded-pill fw-bold d-inline-flex align-items-center gap-2 shadow-sm">
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Blog;