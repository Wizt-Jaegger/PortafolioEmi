import React, { useState } from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import Presentacion from "./Componentes/Presentacion/Presentacion";
import Planes from "./Componentes/Planes/Planes";
import Titulo from "./Componentes/Titulo/Titulo";
import AcercaDe from "./Componentes/AcercaDe/AcercaDe";
import Galeria from "./Componentes/Galeria/Galeria";
import Testimonios from "./Componentes/Testimonios/Testimonios";
import Contacto from "./Componentes/Contacto/Contacto";
import Footer from "./Componentes/Footer/Footer";
import Maps from "./Componentes/Maps/Maps";
import ReproductorVideo from "./Componentes/ReproductorVideo/ReproductorVideo";
import { useLanguage } from "../src/LanguageContext"; 
import Clientes from "./Componentes/Clientes/Clientes";
import Portafolio from "./Componentes/Portafolio/Portafolio";

const ContainerApp = () => {
    const [playState, setPlayState] = useState(false);
    const { language } = useLanguage();

    return (
        <div>
            <Navbar />
            <Presentacion />
            <div className="container">
                <AcercaDe setPlayState={setPlayState} language={language} />
                <Titulo 
                    subTitulo={language === "es" ? "Servicios" : language === "en" ? "Services" : language === "de" ? "Dienstleistungen" : "Services"} 
                    titulo={language === "es" ? "Lo Que Ofrecemos" : language === "en" ? "What We Offer" : language === "de" ? "Was Wir Anbieten" : "Ce Que Nous Offrons"} 
                />
                <Planes />
                
                <Titulo 
                    subTitulo={language === "es" ? "Clientes" : language === "en" ? "Clients" : language === "de" ? "Kunden" : "Clients"} 
                    titulo={language === "es" ? "Nuestros socios y clientes" : language === "en" ? "Our Clients and Associates" : language === "de" ? "Unsere Kunden und Partner" : "Nos Clients et Associés"} 
                />
                <Clientes />
                <Titulo 
                    subTitulo={language === "es" ? "Tecnologías" : language === "en" ? "Technologies" : language === "de" ? "Technologien" : "Technologies"} 
                    titulo={language === "es" ? "Tecnologías que utilizamos" : language === "en" ? "Technologies we use" : language === "de" ? "Technologien, die wir verwenden" : "Technologies que nous utilisons"} 
                />
                <Galeria />
                <Titulo 
                    subTitulo={language === "es" ? "Portafolio" : language === "en" ? "Portfolio" : language === "de" ? "Portfolio" : "Portfolio"} 
                    titulo={language === "es" ? "Nuestros proyectos" : language === "en" ? "Our Projects" : language === "de" ? "Unsere Projekte" : "Nos Projets"} 
                />
            </div>
                
            <Portafolio />

            <div className="container">
                <Titulo 
                    subTitulo={language === "es" ? "TESTIMONIOS" : language === "en" ? "TESTIMONIALS" : language === "de" ? "REFERENZEN" : "TÉMOIGNAGES"} 
                    titulo={language === "es" ? "Lo Que Dicen Nuestros Clientes" : language === "en" ? "What Our Clients Say" : language === "de" ? "Was Unsere Kunden Sagen" : "Ce Que Nos Clients Disent"} 
                />
                <Testimonios />
                <Titulo 
                    subTitulo={language === "es" ? "Contactanos" : language === "en" ? "Contact Us" : language === "de" ? "Kontaktieren Sie Uns" : "Contactez-Nous"} 
                    titulo={language === "es" ? "Danos tu opinión" : language === "en" ? "Your feedback" : language === "de" ? "Ihr Feedback" : "Vos retours"} 
                />
                <Contacto />
                <Maps />
            </div>
            
            <Footer />
            <ReproductorVideo playState={playState} setPlayState={setPlayState} />
        </div>
    );
}

export default ContainerApp;
