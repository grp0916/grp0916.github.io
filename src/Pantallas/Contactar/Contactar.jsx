import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contactar.css";
import PopUpContactar from "../../componentes/popup/PopUpContactar";

const Contactar = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enlace para enviar el correo
    const mailtoLink = `mailto:kalinchinex@gmail.com?subject=Consulta de ${formData.nombre}&body=Nombre: ${formData.nombre}%0AEmail: ${formData.email}%0ATeléfono: ${formData.telefono}%0AMensaje: ${formData.mensaje}`;

    window.location.href = mailtoLink;

    setShowPopup(true);
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contactenos" className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h1 className="contact-title">📩 Contáctanos</h1>
        <p className="contact-subtitle">
          Déjanos tu mensaje y te responderemos pronto.
        </p>
        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="text"
            name="nombre"
            placeholder="Tu Nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <FaPhone className="icon" />
          <input
            type="tel"
            name="telefono"
            placeholder="Tu Teléfono"
            required
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <FaCommentDots className="icon" />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            required
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="btn-enviar">
            Enviar <FaPaperPlane className="send-icon" />
          </button>
        </div>
      </form>
      {showPopup && <PopUpContactar onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default Contactar;
