import React, { useState } from "react";
import './Galeria.css';
import galeria_1 from '../../assets/gallery-1.png';
import galeria_1_Extend from '../../assets/gallery-1-extend.png';
import galeria_2 from '../../assets/gallery-2.png';
import galeria_2_Extend from '../../assets/gallery-2-extend.png';
import galeria_3 from '../../assets/gallery-3.png';
import galeria_3_Extend from '../../assets/gallery-3-extend.png';
import galeria_4 from '../../assets/gallery-4.png';
import galeria_4_Extend from '../../assets/gallery-4-extend.png';
import flechaBlanca from '../../assets/dark-arrow.svg';
import { useLanguage } from "../../LanguageContext";

const imageMap = {
    [galeria_1]: galeria_1_Extend,
    [galeria_2]: galeria_2_Extend,
    [galeria_3]: galeria_3_Extend,
    [galeria_4]: galeria_4_Extend
};

const Galeria = () => {
    const { language } = useLanguage(); 
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(imageMap[image]);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="galeria">
            <div className="gallery">
                {[galeria_1, galeria_2, galeria_3, galeria_4].map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Galería ${index + 1}`} 
                        onClick={() => openModal(image)} 
                    />
                ))}
            </div>
            <a 
                className="btn" 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {language === "es" ? "Ver más" : "Watch more"} <img src={flechaBlanca} alt="Flecha blanca" />
            </a>
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Imagen ampliada" />
                        <button className="close-button" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Galeria;
