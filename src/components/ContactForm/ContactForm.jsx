// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Sparkles } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const adminMobile = "6200514381";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const text = `*New Contact Inquiry - Pixsy Media*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/91${adminMobile}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section py-5 position-relative overflow-hidden bg-light">
      {/* Background Glowing Orbs */}
      <div className="contact-bg-circle contact-bg-circle-1"></div>
      <div className="contact-bg-circle contact-bg-circle-2"></div>

      <div className="container position-relative z-2">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-3 fw-bold text-warning bg-warning bg-opacity-10 border border-warning border-opacity-10 d-inline-flex align-items-center gap-2" style={{ fontSize: '0.75rem', letterSpacing: '1.5px' }}>
              <Sparkles size={14} /> GET IN TOUCH
            </span>
            <h2 className="fw-bold display-6 text-dark mb-2">
              Let's Build Something <span style={{ background: "linear-gradient(135deg, #ff6b00, #ff2770, #873cff, #2865ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Amazing</span>
            </h2>
            <p className="text-muted fs-6">Fill out the form below and your message will be sent instantly to WhatsApp!</p>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white bg-opacity-90 position-relative overflow-hidden">
              <div className="position-absolute top-0 start-0 end-0" style={{ height: '4px', background: 'linear-gradient(135deg, #ff6b00, #ff2770, #873cff, #2865ff)' }}></div>

              <form onSubmit={handleSubmit} className="row g-4">
                {/* Name */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark mb-2">Your Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted ps-3">
                      <User size={18} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-light border-start-0 py-3 shadow-none"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark mb-2">Your Email</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted ps-3">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-start-0 py-3 shadow-none"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="col-12">
                  <label className="form-label fw-semibold text-dark mb-2">Subject</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted ps-3">
                      <Sparkles size={18} />
                    </span>
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-light border-start-0 py-3 shadow-none"
                      placeholder="Project discussion / Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <label className="form-label fw-semibold text-dark mb-2">Message</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted ps-3 align-items-start pt-3">
                      <MessageSquare size={18} />
                    </span>
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control bg-light border-start-0 py-3 shadow-none"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center mt-4">
                  <button
                    type="submit"
                    className="btn text-white w-100 py-3 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2 border-0 shadow-sm"
                    style={{ background: "linear-gradient(135deg, #ff6b00, #ff2770, #873cff, #2865ff)" }}
                  >
                    <span>Send Message via WhatsApp</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;