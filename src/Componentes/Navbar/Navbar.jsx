import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../../assets/logoPortafolio.svg';
import menu_icon from '../../assets/menu-icon.svg';
import tache_icon from '../../assets/tache.svg';
import dropdown_icon from '../../assets/dropdown.svg'; 
import closedown_icon from '../../assets/closedown.svg'; 
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext"; 

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage(); 
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [trayectoriaMenu, setTrayectoriaMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        
        if (!document.querySelector('script[data-userway]')) {
            const script = document.createElement("script");
            script.src = "https://cdn.userway.org/widget.js";
            script.dataset.account = "kjnkkEfZx0";
            script.dataset.userway = "true"; // Atributo personalizado para identificarlo
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const toggleMenu = () => setMobileMenu(!mobileMenu);
    const toggleTrayectoriaMenu = () => setTrayectoriaMenu(!trayectoriaMenu);

    return (
        <div>
            {/* Botón flotante para WhatsApp */}
            <a
                className="botonFlotante"
                href="https://wa.me/527779904960"
                target="_blank"
                rel="noopener noreferrer"
                title="¡Whasaaaa!"
            >
                <i className="fab fa-whatsapp"></i>
            </a>

            {/* Botón flotante para subir */}
            <a
                className={`botonUp ${sticky ? 'dark-botonUp' : ''}`}
                title="¡Pa' arriba!"
            >
                <Link to="presentacion" smooth={true} offset={0} duration={800}>
                    <i className='bx bx-chevron-up-circle'></i>
                </Link>
            </a>

            {/* Botón flotante para bajar */}
            <a
                className={`botonDown ${sticky ? 'dark-botonDown' : ''}`}
                title="¡Pa' abajo!"
            >
                <Link to="footer" smooth={true} offset={0} duration={1000}>
                    <i className='bx bx-chevron-down-circle'></i>
                </Link>
            </a>

            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <img src={logo} alt="logo Sorelu" className="logo" />
                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li className="active">
                        <Link to="presentacion" smooth={true} offset={0} duration={500}>
                            {language === "es" ? "Inicio" : "Home"}
                        </Link>
                    </li>
                    <li>
                        <Link to="acercaDe" smooth={true} offset={-150} duration={500}>
                            {language === "es" ? "Acerca de" : "About"}
                        </Link>
                    </li>
                    <li>
                        <Link to="planes" smooth={true} offset={-260} duration={500}>
                            {language === "es" ? "Servicios" : "Services"}
                        </Link>
                    </li>
                    <li 
                        className="dropdown" 
                        onMouseEnter={toggleTrayectoriaMenu} 
                        onMouseLeave={toggleTrayectoriaMenu}
                    >
                        <span>
                            {language === "es" ? "Trayectoria" : "Trajectory"}
                        </span>
                        {/* Imagen dinámica para dropdown */}
                        <img 
                            src={trayectoriaMenu ? closedown_icon : dropdown_icon} 
                            alt="Dropdown Icon" 
                            className="dropdown-icon" 
                        />
                        <ul className={`submenu ${trayectoriaMenu ? 'show' : ''}`}>
                            <li>
                                <Link to="clientes" smooth={true} offset={-260} duration={500}>
                                    {language === "es" ? "Clientes" : "Clients"}
                                </Link>
                            </li>
                            <li>
                                <Link to="galeria" smooth={true} offset={-260} duration={500}>
                                    {language === "es" ? "Tecnologías" : "Technologies"}
                                </Link>
                            </li>
                            <li>
                                <Link to="portfolio section" smooth={true} offset={-80} duration={500}>
                                    {language === "es" ? "Portafolio" : "Portfolio"}
                                </Link>
                            </li>
                            <li>
                                <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                                    {language === "es" ? "Testimonios" : "Testimonials"}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="contactoBtn">
                        <Link to="contacto" smooth={true} offset={-260} duration={500} className="btn">
                            {language === "es" ? "Contáctanos" : "Contact Us"}
                        </Link>
                    </li>
                </ul>
                <div className="menu-container">
                    <div className="engBtn" onClick={toggleLanguage}>
                        {language === "es" ? "ENG" : "ESP"}
                    </div>
                    {/* Cambio dinámico de la imagen del icono del menú */}
                    <img 
                        src={mobileMenu ? tache_icon : menu_icon} 
                        alt="menu" 
                        className="menu-icon" 
                        onClick={toggleMenu} 
                    />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
