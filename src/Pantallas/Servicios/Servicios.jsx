import React, { useState } from "react";
import "./Servicios.css";
import PopUpServicios from "../../componentes/popup/PopUpServicios";
import serviciosData from "../../componentes/constantes/ServiciosData";

const Servicios = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  return (
    <section id="servicios" className="servicios-container">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {serviciosData.map((servicio) => (
          <div 
            key={servicio.id} 
            className="card" 
            onClick={() => setServicioSeleccionado(servicio)}
          >
            <img src={servicio.imagen} alt={servicio.titulo} className="card-img" />
            <div className="card-content">
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      {servicioSeleccionado && (
        <PopUpServicios servicio={servicioSeleccionado} onClose={() => setServicioSeleccionado(null)} />
      )}
    </section>
  );
};

export default Servicios;
