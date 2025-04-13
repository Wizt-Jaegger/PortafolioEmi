import React from "react";
import './AcercaDe.css';
import acercaDe_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.svg';
import { useLanguage } from "../../LanguageContext"; // Importar el contexto

const AcercaDe = ({ setPlayState }) => {
    const { language } = useLanguage(); 

    return (
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img src={acercaDe_img} alt="Imagen de Taloin" className="acercaDe-img" />
                <img 
                    src={play_icon} 
                    alt="Ícono de reproducción" 
                    className="play-icon" 
                    onClick={() => setPlayState(true)} 
                />
            </div>
            <div className="acercaDe-der">
                <h3>{language === "es" ? "ACERCA DE TALOIN" : "ABOUT TALOIN"}</h3>
                <h2>
                    {language === "es"
                        ? "¡Software a tu medida!"
                        : "Software tailored to your needs!"}
                </h2>
                <p>
                    {language === "es"
                        ? "Taloin es una empresa emergente especializada en el desarrollo de software embebido, plataformas web y no web, así como en el mantenimiento de equipos de cómputo. Fue fundada por ingenieros orgullosos de la Universidad Politécnica del Estado de Morelos, con diversas certificaciones en áreas como desarrollo web, inglés, Cisco, electrónica digital, automatización, ciberseguridad, entre otros."
                        : "Taloin is an emerging company specializing in embedded software development, web and non-web platforms, as well as computer maintenance. It was founded by proud engineers from the Polytechnic University of the State of Morelos, with various certifications in areas such as web development, English, Cisco, digital electronics, automation, cybersecurity, among others."}
                </p>
            </div>
        </div>
    );
};

export default AcercaDe;
 