import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import flecha_oscura from '../../assets/dark-arrow.svg';
import logo from '../../assets/logoPortafolio.svg';
import emi from '../../assets/emi.png';
import presentacion1 from '../../assets/presentacion1.png';
import presentacion2 from '../../assets/presentacion2.png';
import presentacion3 from '../../assets/presentacion3.png';
import presentacion4 from '../../assets/presentacion4.png';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const imageArray = [presentacion1, presentacion2, presentacion3, presentacion4];

const Presentacion = () => {
    const { language } = useLanguage();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevIndex => (prevIndex + 1) % imageArray.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    const translations = {
        es: {
            title: "Tu amigo de TI",
            description: "Resuelve tus problemas con la ayuda de tu amigo de TI",
            button: "¡Contrátame!"
        },
        en: {
            title: "Your IT friend",
            description: "Solve your problems with the help of your IT friend",
            button: "Hire me!"
        },
        de: {
            title: "Dein IT-Freund",
            description: "Löse deine Probleme mit der Hilfe deines IT-Freundes",
            button: "Stell mich ein!"
        },
        fr: {
            title: "Ton ami en TI",
            description: "Résous tes problèmes avec l'aide de ton ami en TI",
            button: "Embauche-moi !"
        }
    };

    const t = translations[language];

    return (
        <div 
            className='presentacion container'
            style={{
                backgroundImage: `linear-gradient(110deg, rgb(0, 0, 0), rgba(19, 45, 70, 0.8)), url(${imageArray[currentImage]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out'
            }}
        >
            <div className='presentacion-texto'>
                <img src={logo} alt="Logo" style={{ width: '80%', height: 'auto' }} />
                <h1>{t.title}</h1>
                <p>{t.description}</p>
                <p>
                    <Link
                        to="contacto"
                        smooth={true}
                        offset={-260}
                        duration={500}
                        className="btn"
                    >
                        {t.button}
                        <img src={flecha_oscura} alt='' />
                        <div class="btn2"></div>
                    </Link>
                </p>
            </div>
            <div className='presentacion-foto'>
                <img src={emi} alt="Emi" className="presentacion-foto-img" />
            </div>
        </div>
    );
};

export default Presentacion;
