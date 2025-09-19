import React from "react";
import "./PopUpContactar.css";

const PopUpContactar = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>🎉 ¡Mensaje Enviado!</h3>
        <p>Nos pondremos en contacto contigo lo antes posible.</p>
        <button className="btn-cerrar" onClick={onClose}>Aceptar</button>
      </div>
    </div>
  );
};

export default PopUpContactar;
