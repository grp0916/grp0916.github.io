import React from "react";
import "./PopUpServicios.css";

const PopUpServicios = ({ servicio, onClose }) => {
  if (!servicio) return null;

  // Calcular el total sumando los precios
  const total = servicio.precios.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Botón de Cerrar "X" */}
        <button className="close-btn" onClick={onClose}>✖</button>
        
        <h2 className="popup-title">{servicio.titulo}</h2> {/* Título animado */}
        <img src={servicio.imagenPopup} alt={servicio.titulo} className="popup-img" />
        <p>{servicio.descripcionPopup}</p>

        {/* Tabla de Precios */}
        <table className="price-table">
          <thead>
            <tr>
              <th>TOUR</th>
              <th>PRECIO</th>
            </tr>
          </thead>
          <tbody>
            {servicio.precios.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>${item.precio}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td><b>TOTAL</b></td>
              <td><b>${total}</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopUpServicios;
