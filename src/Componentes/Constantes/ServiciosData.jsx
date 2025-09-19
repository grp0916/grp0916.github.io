import Servicios1 from "../../assets/imagenes/servicios/Servicios1.png";
import Servicios2 from "../../assets/imagenes/servicios/Servicios2.png";
import Servicios3 from "../../assets/imagenes/servicios/Servicios3.png";
import Servicios4 from "../../assets/imagenes/servicios/Servicios4.png";

const serviciosData = [
  {
    id: 1,
    titulo: "Visita a la Muralla China",
    imagen: Servicios1,
    descripcion: "Un recorrido fascinante por la Muralla China.",
    imagenPopup: Servicios2,
    descripcionPopup: "Este tour incluye una caminata guiada de 4 horas por la Gran Muralla China, acceso a zonas restringidas y una cena tradicional china.",
    precios: [
      { nombre: "Visita a la Muralla", precio: 500 }
    ]
  },
  {
    id: 2,
    titulo: "Visita a la Ciudad Olvidada",
    imagen: Servicios3,
    descripcion: "Descubre los secretos de este antiguo palacio.",
    imagenPopup: Servicios4,
    descripcionPopup: "Visita guiada por las ruinas del Palacio Olvidado con historias de la realeza antigua y acceso exclusivo a documentos históricos.",
    precios: [
      { nombre: "Visita a la Ciudad Olvidada", precio: 300 }
    ]
  },
  {
    id: 3,
    titulo: "Visita al Bosque Mágico",
    imagen: Servicios2,
    descripcion: "Una aventura única en la naturaleza.",
    imagenPopup: Servicios4,
    descripcionPopup: "Explora el Bosque Mágico con un guía especializado, disfruta de la flora y fauna, y relájate con un picnic en la naturaleza.",
    precios: [
      { nombre: "Visita al bosque", precio: 200 }
    ]
  }
];

export default serviciosData;
