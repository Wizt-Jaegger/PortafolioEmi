import React, { use, useState } from "react";
import NavbarWebApp from "../Navbar/NavbarWebApp";
import PresentacionAI from "../Presentacion/PresentacionAI";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";


const ContainerApp = () => {
    const { language } = useLanguage();

    return (
        <div>
            <NavbarWebApp />
            <PresentacionAI />
            <div>
                hola esta es una prueba
            </div>
            <div className="container">
            
            </div>
            
            <Footer />
        </div>
    );
}

export default ContainerApp;
