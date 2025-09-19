import React, { useState, useEffect } from "react";
import "./Inicio.css";
import slides from "../../componentes/constantes/SlidesData"; // 📌 Archivo separado con las imágenes y textos
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // 📌 Iconos de flechas

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Cuando el índice cambie, el texto aparecerá
  useEffect(() => {
    setIsTextVisible(false); // Ocultamos el texto
    setTimeout(() => setIsTextVisible(true), 500); // Esperamos un poco antes de mostrarlo
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="inicio" className="inicio-container">
      {/* Texto a la izquierda */}
      <div className={`texto ${isTextVisible ? "aparecer" : ""}`}>
        <h2>{slides[currentIndex].text}</h2>
      </div>

      {/* Carrusel a la derecha */}
      <div className="carrusel">
        <button className="flecha izquierda" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <img src={slides[currentIndex].image} alt="Slide" className="slide" />

        <button className="flecha derecha" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Inicio;
