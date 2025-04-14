import React from 'react';
import './PresentacionSub.css';
import main_img from '../../assets/linux-img.png';
import flecha_oscura from '../../assets/dark-arrow.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const translations = {
  es: {
    saludo: "¿Apasionado por Linux y C?",
    slogan: "Linux diario. C serio.",
    descripcion: "Uso Linux como sistema principal (Debian, Ubuntu, Fedora, Arch...)\nConozco el sistema desde dentro, escribo C con confianza y me entusiasma profundizar más",
    descubrir: "Ver más"
  },
  en: {
    saludo: "Passionate about Linux and C?",
    slogan: "Daily Linux. Serious C.",
    descripcion: "I use Linux as my main OS (Debian, Ubuntu, Fedora, Arch...)\nI know my way around the system, write C confidently, and I'm eager to go deeper",
    descubrir: "Learn more"
  },
  fr: {
    saludo: "Passionné par Linux et le C ?",
    slogan: "Linux au quotidien. C sérieusement.",
    descripcion: "Linux est mon OS principal (Debian, Ubuntu, Fedora, Arch...)\nJe connais bien le système, je code en C avec confiance, et je veux aller plus loin",
    descubrir: "En savoir plus"
  },
  de: {
    saludo: "Leidenschaft für Linux und C?",
    slogan: "Tägliches Linux. Echtes C.",
    descripcion: "Linux ist mein Hauptbetriebssystem (Debian, Ubuntu, Fedora, Arch...)\nIch kenne mich gut aus, schreibe C sicher und will noch tiefer eintauchen",
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
