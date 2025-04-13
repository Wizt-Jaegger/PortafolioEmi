import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import flecha_oscura from '../../assets/dark-arrow.svg';
import logo from '../../assets/logoPortafolio.svg';
import emi from '../../assets/emi.png';
import presentacion1 from '../../assets/presentacion1.png';
import presentacion2 from '../../assets/presentacion2.png';
import presentacion3 from '../../assets/presentacion3.png';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext"; // Import context

const imageArray = [presentacion1, presentacion2, presentacion3];

const Presentacion = () => {
    const { language } = useLanguage();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevIndex => (prevIndex + 1) % imageArray.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

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
                <h1>
                    {language === "es" ? "Tu amigo de TI" : "Your TI friend"}
                </h1>
                <p>
                    {language === "es"
                        ? "Resuelve tus problemas con la ayuda de tu amigo de TI"
                        : "Solve your problems with the help of your TI friend"}
                </p>
                <p>
                    <Link
                        to="planes"
                        smooth={true}
                        offset={-260}
                        duration={500}
                        className="btn"
                    >
                        {language === "es" ? "¡Contratame!" : "Hire me!"}
                        <img src={flecha_oscura} alt='' />
                    </Link>
                </p>
            </div>
            <div className='presentacion-foto'>
                <img src={emi} alt="Emi" className="presentacion-foto-img" />
            </div>


        </div>
    );
}

export default Presentacion;
