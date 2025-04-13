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
            <AcercaDe setPlayState={setPlayState} language={language}/>
                <Titulo 
                    subTitulo={language === "es" ? "Servicios" : "Services"} 
                    titulo={language === "es" ? "Lo Que Ofrecemos" : "What We Offer"} 
                />
                <Planes />
                
                <Titulo 
                    subTitulo={language === "es" ? "Clientes" : "Clients"} 
                    titulo={language === "es" ? "Nuestros socios y clientes" : "Our Clients and asosiates"} 
                />
                <Clientes />
                <Titulo 
                    subTitulo={language === "es" ? "Tecnologías" : "Technologies"}
                    titulo={language === "es" ? "Tecnologías que utilizamos" : "Technologies we use"}
                />
                <Galeria />
                <Titulo 
                    subTitulo={language === "es" ? "Portafolio" : "Portfolio"} 
                    titulo={language === "es" ? "Nuestros proyectos" : "Our Proyects"} 
                />
            </div>
                
            <Portafolio />

            <div className="container">
                <Titulo 
                    subTitulo={language === "es" ? "TESTIMONIOS" : "TESTIMONIALS"} 
                    titulo={language === "es" ? "Lo Que Dicen Nuestros Clientes" : "What Our Clients Say"} 
                />
                <Testimonios />
                <Titulo 
                    subTitulo={language === "es" ? "Contactanos" : "Contact Us"} 
                    titulo={language === "es" ? "Danos tu opinión" : "Your feedback"} 
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
