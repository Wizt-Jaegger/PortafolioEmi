import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import flecha_oscura from '../../assets/dark-arrow.svg';
import logo from '../../assets/logoPortafolio.svg';
import emi from '../../assets/emi.png';
import presentacion1 from '../../assets/presentacion1.png';
import presentacion2 from '../../assets/presentacion2.png';
import presentacion3 from '../../assets/presentacion3.png';
import presentacion4 from '../../assets/presentacion4.png';
import { useLanguage } from "../../LanguageContext";
import { Github, Linkedin, Download } from 'lucide-react'; 

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
            title: "Desarrollador Full Stack & Linux Enthusiast",
            description: "Construyendo soluciones web escalables, eficientes y centradas en el usuario.",
            button: "CV",
            githubLabel: "GitHub",
            linkedinLabel: "LinkedIn"
        },
        en: {
            title: "Full Stack Developer & Linux Enthusiast",
            description: "Building scalable, efficient, and user-centric web solutions.",
            button: "Resume",
            githubLabel: "GitHub",
            linkedinLabel: "LinkedIn"
        },
        de: {
            title: "Full Stack Entwickler & Linux-Enthusiast",
            description: "Entwicklung skalierbarer, effizienter und benutzerzentrierter Web-Lösungen.",
            button: "Lebenslauf",
            githubLabel: "GitHub",
            linkedinLabel: "LinkedIn"
        },
        fr: {
            title: "Développeur Full Stack & Passionné Linux",
            description: "Création de solutions web évolutives, efficaces et centrées sur l'utilisateur.",
            button: "CV",
            githubLabel: "GitHub",
            linkedinLabel: "LinkedIn"
        }
    };

    const t = translations[language];

    // Estilos en línea para los botones sociales
    const socialBtnStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '10px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50px',
        color: 'white',
        textDecoration: 'none',
        backdropFilter: 'blur(5px)',
        transition: 'all 0.3s ease',
        fontSize: '1rem',
        cursor: 'pointer'
    };

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
                <img src={logo} alt="Logo" style={{ width: '80%', height: 'auto', marginBottom: '20px' }} />
                
                <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '15px' }}>{t.title}</h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px' }}>{t.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '30px', alignItems: 'center' }}>
                    
                    {/* Botón Principal CV */}
                    <a
                        href={`/CV_LuisEReyesG_${language.toUpperCase()}.pdf`}
                        download
                        className="btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                    >
                        {t.button}
                        <Download size={20} />
                        <div className="btn2"></div>
                    </a>

                    {/* Botón GitHub (Uses Brand Primary Teal #00c9c3) */}
                    <a 
                        href="https://github.com/Wizt-Jaegger" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={socialBtnStyle}
                        className="social-hover"
                        onMouseOver={(e) => { 
                            e.currentTarget.style.backgroundColor = '#00c9c3'; // Brand Teal
                            e.currentTarget.style.borderColor = '#00c9c3';
                            e.currentTarget.style.color = '#000'; 
                        }}
                        onMouseOut={(e) => { 
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.color = 'white'; 
                        }}
                    >
                        <Github size={20} />
                        <span>GitHub</span>
                    </a>

                    {/* Botón LinkedIn (Uses Brand Secondary Blue #0dd0fc) */}
                    <a 
                        href="https://www.linkedin.com/in/luis-emiliano-reyes-gutierrez-231833208/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={socialBtnStyle}
                        onMouseOver={(e) => { 
                            e.currentTarget.style.backgroundColor = '#0dd0fc'; // Brand Blue
                            e.currentTarget.style.borderColor = '#0dd0fc';
                            e.currentTarget.style.color = '#000'; // Black text for contrast on bright blue
                        }}
                        onMouseOut={(e) => { 
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.color = 'white'; 
                        }}
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                </div>

            </div>
            <div className='presentacion-foto'>
                <img src={emi} alt="Emi" className="presentacion-foto-img" />
            </div>
        </div>
    );
};

export default Presentacion;