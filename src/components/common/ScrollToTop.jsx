// src/components/common/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(Math.round(progress));
      }

      if (currentScroll > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="scroll-to-top-btn shadow-sm"
    >
      <ArrowUp size={16} strokeWidth={2.5} />
      <span className="scroll-percent">{scrollProgress}%</span>

      <style>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 999;
          background: #ffffff;
          color: #111827;
          border: 1px solid #e2e8f0;
          padding: 6px 12px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .scroll-percent {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .scroll-to-top-btn:hover {
          background: linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff);
          color: #ffffff;
          border-color: transparent;
          transform: translateY(-4px);
          box-shadow: 0 8px 22px rgba(112, 54, 255, 0.25);
        }

        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 20px;
            right: 20px;
            padding: 5px 10px;
          }
          .scroll-percent {
            font-size: 10px;
          }
        }
      `}</style>
    </button>
  );
}