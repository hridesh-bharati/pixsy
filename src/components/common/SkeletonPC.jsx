// src/components/common/SkeletonPC.jsx
import React from "react";
import "./Skeleton.css";

const SkeletonPC = () => {
  return (
    <div className="skeleton-pc-container container py-3">
      {/* PC Header / Navbar Skeleton */}
      <div className="d-flex justify-content-between align-items-center mb-5 px-4">
        {/* Logo */}
        <div className="skeleton-box" style={{ width: "150px", height: "35px", borderRadius: "4px" }}></div>

        {/* Nav Links */}
        <div className="d-flex gap-4">
          <div className="skeleton-box" style={{ width: "60px", height: "20px", borderRadius: "4px" }}></div>
          <div className="skeleton-box" style={{ width: "60px", height: "20px", borderRadius: "4px" }}></div>
          <div className="skeleton-box" style={{ width: "60px", height: "20px", borderRadius: "4px" }}></div>
          <div className="skeleton-box" style={{ width: "60px", height: "20px", borderRadius: "4px" }}></div>
        </div>

        {/* Dashboard Button */}
        <div className="skeleton-box" style={{ width: "110px", height: "35px", borderRadius: "20px" }}></div>
      </div>

      {/* Hero Section PC Layout */}
      <div className="row align-items-center px-4 my-5">
        <div className="col-md-7">
          <div className="skeleton-box mb-3" style={{ width: "60%", height: "45px", borderRadius: "6px" }}></div>
          <div className="skeleton-box mb-4" style={{ width: "90%", height: "80px", borderRadius: "6px" }}></div>
          <div className="skeleton-box" style={{ width: "40%", height: "45px", borderRadius: "25px" }}></div>
        </div>
        <div className="col-md-5">
          <div className="skeleton-box w-100" style={{ height: "300px", borderRadius: "16px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonPC;