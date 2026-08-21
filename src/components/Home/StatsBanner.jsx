// src/components/Home/StatsBanner/StatsBanner.jsx
import React from "react";
import { Users, Briefcase, Smile, Award } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    { icon: <Users size={26} className="text-white" />, number: "50+", label: "Happy Clients" },
    { icon: <Briefcase size={26} className="text-white" />, number: "100+", label: "Projects Completed" },
    { icon: <Smile size={26} className="text-white" />, number: "98%", label: "Client Satisfaction" },
    { icon: <Award size={26} className="text-white" />, number: "3+", label: "Years of Experience" }
  ];

  return (
    <section className="py-4 bg-white">
      <div className="container-fluid px-0">
        <div className="w-100 py-4 px-3 stats-rainbow-banner shadow-sm">
          <div className="row align-items-center justify-content-around text-white text-center text-md-start g-4 mx-0">
            {stats.map((item, index) => (
              <div className="col-6 col-md-3 d-flex flex-column flex-md-row align-items-center justify-content-center gap-3" key={index}>
                <div className="rounded-3 d-flex align-items-center justify-content-center bg-white bg-opacity-25 backdrop-blur flex-shrink-0" style={{ width: "52px", height: "52px" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="fw-bold mb-0 text-white fs-4 lh-1">{item.number}</h3>
                  <p className="mb-0 text-white opacity-90 small fw-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stats-rainbow-banner {
          background: linear-gradient(90deg, #d906bc 0%, #ff5500 35%, #ffcc00 70%, #00b4db 100%);
        }
      `}</style>
    </section>
  );
}