import React, { useEffect } from "react";
import "./Fondos.css";

const Fondos = () => {
  useEffect(() => {
    const container = document.querySelector(".particles-container");

    if (container && container.children.length === 0) {
      for (let i = 0; i < 20; i++) {
        let particle = document.createElement("div");
        particle.className = "particle";
        container.appendChild(particle);
      }
    }
  }, []);

  return <div className="particles-container"></div>;
};

export default Fondos;
