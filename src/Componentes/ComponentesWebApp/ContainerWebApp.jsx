import React, { use, useState } from "react";
import NavbarWebApp from "../Navbar/NavbarWebApp";
import PresentacionWebApp from "../Presentacion/PresentacionWebApp";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";


const ContainerApp = () => {
    const { language } = useLanguage();

    return (
        <div>
            <NavbarWebApp />
            <PresentacionWebApp />
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
