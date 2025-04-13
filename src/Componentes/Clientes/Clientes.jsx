import React, { useRef } from "react";
import "./Clientes.css";
import FotoCli1 from "../../assets/FotoCli_1.png";
import FotoCli2 from "../../assets/FotoCli_2.png";
import FotoCli3 from "../../assets/FotoCli_3.png";
import FotoCli4 from "../../assets/FotoCli_4.png";
import UserIcon from "../../assets/user_Icon.jpg";
import { useLanguage } from "../../LanguageContext";

const clientesData = {
  es: [
    { img: FotoCli1, name: "Colegio William Shakespeare", slogan: "Educando con una sonrisa" },
    { img: FotoCli2, name: "Alerta Segura", slogan: "Por una comunidad segura" },
    { img: FotoCli3, name: "Jardín Sorelu", slogan: "¡Celebra como en casa!" },
    { img: FotoCli4, name: "Pa'tours", slogan: "¡Viajes con clase y estilo!" },
    { img: UserIcon, name: "Nombre cliente", slogan: "Slogan cliente" },
    { img: UserIcon, name: "Nombre cliente", slogan: "Slogan cliente" }
  ],
  en: [
    { img: FotoCli1, name: "William Shakespeare School", slogan: "Educating with a smile" },
    { img: FotoCli2, name: "Safe Alert", slogan: "For a safe community" },
    { img: FotoCli3, name: "Sorelu Garden", slogan: "Celebrate like at home!" },
    { img: FotoCli4, name: "Pa'tours", slogan: "Travel with class and style!" },
    { img: UserIcon, name: "Client Name", slogan: "Client slogan" },
    { img: UserIcon, name: "Client Name", slogan: "Client slogan" }
  ]
};

const Clientes = () => {
  const { language } = useLanguage();
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);

  const clientes = clientesData[language];

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
                <h2>{cliente.name}</h2>
                <span>{cliente.slogan}</span>
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