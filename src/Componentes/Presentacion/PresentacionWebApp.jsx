import React from 'react';
import './PresentacionSub.css';
import main_img from '../../assets/main-img.png';
import flecha_oscura from '../../assets/dark-arrow.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const translations = {
  es: {
    saludo: "¿Buscas talento en desarrollo web?",
    slogan: "Soy desarrollador\nFrontend y Fullstack",
    descripcion: "Construyo sitios y sistemas web modernos,\nfuncionales y escalables",
    descubrir: "Conoce mi trabajo"
  },
  en: {
    saludo: "Looking for web development talent?",
    slogan: "I'm a Frontend and Fullstack Developer",
    descripcion: "I build modern, functional,\nand scalable web applications",
    descubrir: "See my work"
  },
  fr: {
    saludo: "Vous cherchez un développeur web ?",
    slogan: "Développeur Frontend et Fullstack",
    descripcion: "Je crée des sites et applications web\nmodernes et évolutifs",
    descubrir: "Voir mon travail"
  },
  de: {
    saludo: "Suchen Sie einen Webentwickler?",
    slogan: "Frontend- und Fullstack-Entwickler",
    descripcion: "Ich entwickle moderne und skalierbare\nWebanwendungen",
    descubrir: "Meine Arbeit ansehen"
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
