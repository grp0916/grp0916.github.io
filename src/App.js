import NavBar from "./componentes/navbar/NavBar";
import Inicio from "./pantallas/inicio/Inicio";
import Presentacion from "./pantallas/presentacion/Presentacion";
import Servicios from "./pantallas/servicios/Servicios";
import Contactar from "./pantallas/contactar/Contactar";
import Footer from "./componentes/footer/Footer";
import "./componentes/fondos/Fondos";

function App() {
  return (
    <div className="App">
      <div className="animated-background"></div>
      <NavBar />
      <Inicio />
      <Presentacion />
      <Servicios />
      <Contactar />
      <Footer />
    </div>
  );
}

export default App;