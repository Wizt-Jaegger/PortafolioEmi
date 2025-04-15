import React, { useRef } from "react";
import "./Clientes.css";
import FotoCli1 from "../../assets/FotoCli_1.png";
import FotoCli2 from "../../assets/FotoCli_2.png";
import FotoCli3 from "../../assets/FotoCli_3.png";
import FotoCli4 from "../../assets/FotoCli_4.png";
import FotoCli5 from "../../assets/FotoCli_5.png";
import FotoCli6 from "../../assets/FotoCli_6.png";
import UserIcon from "../../assets/user_Icon.jpg";
import { useLanguage } from "../../LanguageContext";

const clientesData = {
  es: [
    { img: FotoCli1, name: "Cisco Network Academy", slogan: "English for IT 2" },
    { img: FotoCli2, name: "Cisco Network Academy", slogan: "CCNA: Networking empresarial, seguridad y automatización" },
    { img: FotoCli3, name: "Cisco Network Academy", slogan: "Python Essentials 1" },
    { img: FotoCli4, name: "Universidad Autónoma del Estado de Morelos", slogan: "Diplomado en Mecatrónica y Automatización" },
    { img: FotoCli5, name: "Platzi", slogan: "Curso de control de flujo en C" },
    { img: FotoCli6, name: "Platzi", slogan: "Introducción a la terminal y línea de comandos" },
    { img: UserIcon, name: "Nombre empresa", slogan: "Nombre diploma" }
  ],
  en: [
    { img: FotoCli1, name: "Cisco Network Academy", slogan: "English for IT 2" },
    { img: FotoCli2, name: "Cisco Network Academy", slogan: "CCNA: Enterprise Networking, Security, and Automation" },
    { img: FotoCli3, name: "Cisco Network Academy", slogan: "Python Essentials 1" },
    { img: FotoCli4, name: "Autonomous University of the State of Morelos", slogan: "Diploma in Mechatronics and Automation" },
    { img: FotoCli5, name: "Platzi", slogan: "Flow Control in C Course" },
    { img: FotoCli6, name: "Platzi", slogan: "Introduction to Terminal and Command Line" },
    { img: UserIcon, name: "Company Name", slogan: "Diploma Name" }
  ],
  de: [
    { img: FotoCli1, name: "Cisco Network Academy", slogan: "English for IT 2" },
    { img: FotoCli2, name: "Cisco Network Academy", slogan: "CCNA: Unternehmensnetzwerke, Sicherheit und Automatisierung" },
    { img: FotoCli3, name: "Cisco Network Academy", slogan: "Python Essentials 1" },
    { img: FotoCli4, name: "Autonome Universität des Bundesstaates Morelos", slogan: "Diplom in Mechatronik und Automatisierung" },
    { img: FotoCli5, name: "Platzi", slogan: "Kurs zur Flusskontrolle in C" },
    { img: FotoCli6, name: "Platzi", slogan: "Einführung in das Terminal und die Befehlszeile" },
    { img: UserIcon, name: "Firmenname", slogan: "Diplomname" }
  ],
  fr: [
    { img: FotoCli1, name: "Cisco Network Academy", slogan: "English for IT 2" },
    { img: FotoCli2, name: "Cisco Network Academy", slogan: "CCNA : Réseautage d'entreprise, sécurité et automatisation" },
    { img: FotoCli3, name: "Cisco Network Academy", slogan: "Python Essentials 1" },
    { img: FotoCli4, name: "Université autonome de l'État de Morelos", slogan: "Diplôme en mécatronique et automatisation" },
    { img: FotoCli5, name: "Platzi", slogan: "Cours de contrôle de flux en C" },
    { img: FotoCli6, name: "Platzi", slogan: "Introduction au terminal et à la ligne de commande" },
    { img: UserIcon, name: "Nom de l'entreprise", slogan: "Nom du diplôme" }
  ]
};


const sectionTitles = {
  es: "Nuestros Clientes",
  en: "Our Clients",
  de: "Unsere Kunden",
  fr: "Nos Clients"
};

const Clientes = () => {
  const { language } = useLanguage();
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);

  const clientes = clientesData[language] || clientesData["en"];
  const tituloSeccion = sectionTitles[language] || sectionTitles["en"];

  const handleScroll = (direction) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    const carousel = carouselRef.current;
    const scrollStep = 300;

    if (direction === 'right') {
      if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const newScrollLeft = Math.min(carousel.scrollLeft + scrollStep, carousel.scrollWidth - carousel.offsetWidth);
        carousel.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      }
    } else if (direction === 'left') {
      if (carousel.scrollLeft === 0) {
        carousel.scrollTo({ left: carousel.scrollWidth - carousel.offsetWidth, behavior: 'smooth' });
      } else {
        const newScrollLeft = Math.max(carousel.scrollLeft - scrollStep, 0);
        carousel.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      }
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 300);
  };

  return (
    <section id="clientes" className="clientes-section">
      <h2 className="clientes-title">{tituloSeccion}</h2>
      <div className="row">
        <div className="wrapper">
          <div className="arrow left" onClick={() => handleScroll('left')}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <ul className="carousel" ref={carouselRef}>
            {clientes.map((cliente, index) => (
              <li className="card" key={index}>
                <div className="img">
                  <img src={cliente.img} alt={cliente.name} draggable="false" />
                </div>
                {/*
                <div className="containerCertificationTxt">*/}
                  <h2>{cliente.name}</h2>
                  <span>{cliente.slogan}</span>
                {/*</div>*/}
                
              </li>
            ))}
          </ul>
          <div className="arrow right" onClick={() => handleScroll('right')}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
