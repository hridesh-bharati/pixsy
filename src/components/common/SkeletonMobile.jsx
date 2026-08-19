// src/components/common/SkeletonMobile.jsx
import React from "react";
import "./Skeleton.css"; // Hum common CSS use kar sakte hain

const SkeletonMobile = () => {
  return (
    <div className="skeleton-mobile-container p-3">
      {/* Mobile Header / Navbar Skeleton */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="skeleton-box" style={{ width: "120px", height: "30px", borderRadius: "4px" }}></div>
        <div className="skeleton-box" style={{ width: "30px", height: "30px", borderRadius: "4px" }}></div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="skeleton-hero text-center my-4">
        <div className="skeleton-box mx-auto mb-3" style={{ width: "80%", height: "40px", borderRadius: "6px" }}></div>
        <div className="skeleton-box mx-auto mb-4" style={{ width: "90%", height: "60px", borderRadius: "6px" }}></div>

        {/* Hero Banner Box */}
        <div className="skeleton-box w-100 mb-4" style={{ height: "200px", borderRadius: "12px" }}></div>
      </div>

      {/* Services Cards Skeleton (Horizontal or Stacked for Mobile) */}
      <div className="skeleton-services">
        <div className="skeleton-box mb-3" style={{ width: "150px", height: "20px", borderRadius: "4px" }}></div>
        <div className="d-flex gap-2 overflow-hidden">
          <div className="skeleton-box flex-shrink-0" style={{ width: "140px", height: "90px", borderRadius: "8px" }}></div>
          <div className="skeleton-box flex-shrink-0" style={{ width: "140px", height: "90px", borderRadius: "8px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMobile;