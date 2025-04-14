import React from 'react';
import './PresentacionSub.css';
import main_img from '../../assets/embe-img.png';
import flecha_oscura from '../../assets/dark-arrow.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const translations = {
  es: {
    saludo: "¿Buscas un desarrollador de automatización y sistemas embebidos?",
    slogan: "Lógica cableada y embebidos",
    descripcion: "Desarrollo soluciones con PLC en lenguaje Ladder,\nprogramo microcontroladores (Arduino, Raspberry Pi) y automatizo procesos industriales",
    descubrir: "Ver más"
  },
  en: {
    saludo: "Looking for an automation and embedded systems developer?",
    slogan: "Ladder Logic & Embedded Systems",
    descripcion: "I develop solutions with PLCs using Ladder logic,\nprogram microcontrollers (Arduino, Raspberry Pi), and automate industrial processes",
    descubrir: "Learn more"
  },
  fr: {
    saludo: "Vous cherchez un développeur en automatisation et systèmes embarqués ?",
    slogan: "Ladder Logic & systèmes embarqués",
    descripcion: "Je développe des solutions avec des automates en Ladder,\nje programme des microcontrôleurs (Arduino, Raspberry Pi) et j’automatise des processus industriels",
    descubrir: "En savoir plus"
  },
  de: {
    saludo: "Suchen Sie einen Entwickler für Automatisierung und Embedded Systems?",
    slogan: "Ladder-Logik & Embedded Systems",
    descripcion: "Ich entwickle Lösungen mit SPS in Ladder-Logik,\nprogrammiere Mikrocontroller (Arduino, Raspberry Pi) und automatisiere industrielle Prozesse",
    descubrir: "Mehr erfahren"
  }
};


const Presentacion = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='presentacion-container'>
      <div className='presentacion'>
        <div className='presentacion-texto'>
          <div className='info'>
            <p className='saludo'>{t.saludo}</p>
            <p className="slogan">
              {t.slogan.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </p>
            <p className='descripcion'>
              {t.descripcion.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </p>
            <p>
              <Link
                to="planes"
                smooth={true}
                offset={-260}
                duration={500}
                className="btn"
              >
                {t.descubrir}<img src={flecha_oscura} alt='' />
                <div className="btn2"></div>
              </Link>
            </p>
          </div>
        </div>
        <div className='presentacion-img'>
          <div className="border">
            <div className="img-wrapper">
              <img src={main_img} alt="main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
