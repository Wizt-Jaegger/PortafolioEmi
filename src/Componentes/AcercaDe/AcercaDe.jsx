import React from "react";
import './AcercaDe.css';
import acercaDe_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.svg';
import { useLanguage } from "../../LanguageContext"; // Importar el contexto

const AcercaDe = ({ setPlayState }) => {
    const { language } = useLanguage(); 

    const content = {
        es: {
            titulo: "ACERCA DE TALOIN",
            subtitulo: "¡Software a tu medida!",
            texto: "Taloin es una empresa emergente especializada en el desarrollo de software embebido, plataformas web y no web, así como en el mantenimiento de equipos de cómputo. Fue fundada por ingenieros orgullosos de la Universidad Politécnica del Estado de Morelos, con diversas certificaciones en áreas como desarrollo web, inglés, Cisco, electrónica digital, automatización, ciberseguridad, entre otros."
        },
        en: {
            titulo: "ABOUT TALOIN",
            subtitulo: "Software tailored to your needs!",
            texto: "Taloin is an emerging company specializing in embedded software development, web and non-web platforms, as well as computer maintenance. It was founded by proud engineers from the Polytechnic University of the State of Morelos, with various certifications in areas such as web development, English, Cisco, digital electronics, automation, cybersecurity, among others."
        },
        de: {
            titulo: "ÜBER TALOIN",
            subtitulo: "Maßgeschneiderte Software!",
            texto: "Taloin ist ein aufstrebendes Unternehmen, das sich auf die Entwicklung von Embedded-Software, Web- und Nicht-Web-Plattformen sowie die Wartung von Computern spezialisiert hat. Gegründet wurde es von stolzen Ingenieuren der Polytechnischen Universität des Bundesstaates Morelos mit diversen Zertifizierungen in Bereichen wie Webentwicklung, Englisch, Cisco, digitaler Elektronik, Automatisierung, Cybersicherheit und mehr."
        },
        fr: {
            titulo: "À PROPOS DE TALOIN",
            subtitulo: "Un logiciel sur mesure !",
            texto: "Taloin est une entreprise émergente spécialisée dans le développement de logiciels embarqués, de plateformes web et non web, ainsi que dans la maintenance informatique. Elle a été fondée par des ingénieurs fiers de l'Université Polytechnique de l'État de Morelos, possédant diverses certifications dans des domaines tels que le développement web, l'anglais, Cisco, l'électronique numérique, l'automatisation, la cybersécurité, entre autres."
        }
    };

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
                <h3>{content[language].titulo}</h3>
                <h2>{content[language].subtitulo}</h2>
                <p>{content[language].texto}</p>
            </div>
        </div>
    );
};

export default AcercaDe;
