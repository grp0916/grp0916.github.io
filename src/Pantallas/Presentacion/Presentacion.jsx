import React from "react";
import "./Presentacion.css";
import YungBlue from "../../assets/videos/Yung_Blue.mp4";

const Presentacion = () => {
  return (
    <section id="quienes-somos" className="presentacion-container">
      <div className="video-container">
        <video className="video" controls src={YungBlue} type="video/mp4">
          Tu navegador no soporta videos.
        </video>
      </div>
      <div className="texto-container">
        <h2>¿Quiénes Somos?</h2>
        <p>
          Somos una empresa apasionada por crear experiencias de viaje únicas.
          Te llevamos a los destinos más fascinantes con comodidad, seguridad y
          aventuras inolvidables.
        </p>
      </div>
    </section>
  );
};

export default Presentacion;
