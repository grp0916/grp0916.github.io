import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SiRedragon } from "react-icons/si";
import PopUpContactar from "../popup/PopUpContactar";
import NavBarData from "../constantes/NavBarData";
import "./NavBar.css";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Estado para PopUp

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("begin", (to) => {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
    setNavOpen(false);
  };

  // Función para mostrar el PopUp cuando se envía el formulario
  const showConfirmationPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Oculta después de 3 segundos
  };

  return (
    <>
      <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
        <div className="logo">
          <SiRedragon className="dragonIcon" />
          Viaje China con Lulu
        </div>

        <div className="menu-icon" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>

        <ul className={`nav-links ${navOpen ? "open" : ""}`}>
          {NavBarData.map(({ id, name, to }) => (
            <li key={id} className="nav-item">
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                offset={0}
                onSetActive={handleSetActive}
                className={activeSection === to ? "active" : ""}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mostrar el PopUp cuando se active */}
      {showPopup && <PopUpContactar onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default NavBar;
