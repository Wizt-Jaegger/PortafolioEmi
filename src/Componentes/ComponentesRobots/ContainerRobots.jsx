import React, { use, useState } from "react";
import NavbarWebApp from "../Navbar/NavbarWebApp";
import PresentacionRobots from "../Presentacion/PresentacionRobots";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";


const ContainerApp = () => {
    const { language } = useLanguage();

    return (
        <div>
            <NavbarWebApp />
            <PresentacionRobots />
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
