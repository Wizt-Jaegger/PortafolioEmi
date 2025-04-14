import React, { useState } from "react";
import './Galeria.css';
import { Link } from 'react-router-dom';
import habilidad1 from '../../assets/habilidad-1.png';
import habilidad2 from '../../assets/habilidad-2.png';
import habilidad3 from '../../assets/habilidad-3.png';
import habilidad4 from '../../assets/habilidad-4.png';
import habilidad5 from '../../assets/habilidad-5.png';
import habilidad7 from '../../assets/habilidad-7.png';
import flechaBlanca from '../../assets/dark-arrow.svg';
import { useLanguage } from "../../LanguageContext";

const items = [
    { img: habilidad1, alt: "Web Apps", to: "/web", key: "web" },
    { img: habilidad5, alt: "DevOps & Virtualization", to: "/devops", key: "devops" },
    { img: habilidad3, alt: "Embedded Systems", to: "/embedded", key: "embedded" },
    { img: habilidad4, alt: "Linux Systems", to: "/linux", key: "linux" },
    { img: habilidad2, alt: "Robots", to: "/robots", key: "robots" },
    { img: habilidad7, alt: "AI & Algorithms", to: "/ai", key: "ai" },
];


const Habilidades = () => {
    const { language } = useLanguage(); 
    const [showAll, setShowAll] = useState(false);

    const translations = {
        watchMore: {
            es: "Ver más",
            en: "Show more",
            de: "Mehr ansehen",
            fr: "Voir plus"
        },
        showLess: {
            es: "Ver menos",
            en: "Show less",
            de: "Weniger anzeigen",
            fr: "Voir moins"
        },
        descriptions: {
            web: {
                es: "Aplicaciones web modernas y adaptativas",
                en: "Responsive and modern web apps",
                de: "Moderne und responsive Webanwendungen",
                fr: "Applications web modernes et responsives"
            },
            
            embedded: {
                es: "Sistemas de bajo nivel y microcontroladores",
                en: "Low-level systems and microcontrollers",
                de: "Low-Level-Systeme und Mikrocontroller",
                fr: "Systèmes bas niveau et microcontrôleurs"
            },
            linux: {
                es: "Configuración de Linux y scripting",
                en: "Linux configuration and scripting",
                de: "Linux-Konfiguration und Scripting",
                fr: "Configuration Linux et scripting"
            },
            devops: {
                es: "CI/CD, Docker, VMs y herramientas en la nube",
                en: "CI/CD, Docker, VMs, cloud tools",
                de: "CI/CD, Docker, VMs, Cloud-Werkzeuge",
                fr: "CI/CD, Docker, VMs, outils cloud"
            },
            robots: {
                es: "Diseño y control de sistemas robóticos",
                en: "Design and control of robotic systems",
                de: "Entwurf und Steuerung robotischer Systeme",
                fr: "Conception et contrôle de systèmes robotiques"
            },
            
            ai: {
                es: "Inteligencia artificial y soluciones lógicas",
                en: "Artificial intelligence and logic-based solutions",
                de: "Künstliche Intelligenz und logikbasierte Lösungen",
                fr: "Intelligence artificielle et solutions logiques"
            }
        }
    };
    

    const visibleItems = showAll ? items : items.slice(0, 4);

    return (
        <div className="galeria">
            <div className="gallery">
            {visibleItems.map(({ img, alt, to, key }, index) => (
                <Link key={index} to={to} className="gallery-item">
                    <img src={img} alt={alt} />
                    <div className="gallery-description">
                        {translations.descriptions[key][language]}
                    </div>
                </Link>
            ))}


            </div>

            <button 
                className="btn" 
                onClick={() => setShowAll(prev => !prev)}
            >
                
                {showAll && (
                <img
                    src={flechaBlanca}
                    alt="Flecha blanca"
                    style={{ transform: 'rotate(180deg)', marginRight: '8px'}}
                />
                )}
                {showAll ? translations.showLess[language] : translations.watchMore[language]}
                {!showAll && (
                <img
                    src={flechaBlanca}
                    alt="Flecha blanca"
                    style={{ marginLeft: '8px'}}
                />
                )}

            </button>
        </div>
    );
};

export default Habilidades;
