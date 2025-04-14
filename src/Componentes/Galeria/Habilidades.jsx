import React from "react";
import './Galeria.css';
import { Link } from 'react-router-dom';
import habilidad1 from '../../assets/habilidad-1.png';
import habilidad2 from '../../assets/habilidad-2.png';
import habilidad3 from '../../assets/habilidad-3.png';
import habilidad4 from '../../assets/habilidad-4.png';
import habilidad5 from '../../assets/habilidad-5.png';
import habilidad6 from '../../assets/habilidad-6.png';
import habilidad7 from '../../assets/habilidad-7.png';
import flechaBlanca from '../../assets/dark-arrow.svg';
import { useLanguage } from "../../LanguageContext";

const items = [
    { img: habilidad1, alt: "Web Apps", to: "/web" },
    { img: habilidad2, alt: "Robots", to: "/robots" },
    { img: habilidad3, alt: "Embedded Systems", to: "/embedded" },
    { img: habilidad4, alt: "Linux Systems", to: "/linux" },
    { img: habilidad5, alt: "DevOps & Virtualization", to: "/devops" },
    { img: habilidad6, alt: "Code Automation", to: "/automation" },
    { img: habilidad7, alt: "AI & Algorithms", to: "/ai" },
];

const Habilidades = () => {
    const { language } = useLanguage(); 

    const translations = {
        watchMore: {
            es: "Ver más",
            en: "Watch more",
            de: "Mehr ansehen",
            fr: "Voir plus"
        }
    };

    return (
        <div className="galeria">
            <div className="gallery">
                {items.map(({ img, alt, to }, index) => (
                    <Link key={index} to={to} className="gallery-item">
                        <img src={img} alt={alt} />
                        <div className="gallery-label">{alt}</div>
                    </Link>
                ))}
            </div>

            <a 
                className="btn" 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {translations.watchMore[language]} <img src={flechaBlanca} alt="Flecha blanca" />
            </a>
        </div>
    );
};

export default Habilidades;
