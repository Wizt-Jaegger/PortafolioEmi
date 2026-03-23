import React from 'react';
import './EmbeddedStyles.css';
import { useLanguage } from '../../LanguageContext';
import { Bot, Printer, Settings } from 'lucide-react';

const translations = {
  en: {
    title: "Robotics & Automation",
    desc: "Bridging the gap between software logic and physical actuation.",
    brailleTitle: "Braille Printer (Hackathon)",
    brailleDesc: "Designed logic, electronics, and firmware for an accessible Braille printing device. Integrated stepper motors and solenoid actuators.",
    autoTitle: "Industrial Automation",
    autoDesc: "Diploma in Mechatronics. Experience with PLC programming, pneumatics systems, and industrial sensors integration.",
    modelTitle: "3D Design & PCB",
    modelDesc: "Prototyping enclosures with 3D printing and designing custom logic boards for embedded solutions."
  },
  es: {
    title: "Robótica y Automatización",
    desc: "Uniendo la lógica de software con la actuación física.",
    brailleTitle: "Impresora Braille (Hackathon)",
    brailleDesc: "Diseño de lógica, electrónica y firmware para dispositivo de impresión Braille. Integración de motores a pasos y solenoides.",
    autoTitle: "Automatización Industrial",
    autoDesc: "Diplomado en Mecatrónica. Experiencia con programación de PLC, sistemas neumáticos e integración de sensores industriales.",
    modelTitle: "Diseño 3D y PCB",
    modelDesc: "Prototipado de carcasas con impresión 3D y diseño de placas lógicas personalizadas para soluciones embebidas."
  },
  // Add fr/de as needed
};

const HardwareProjects = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const safeT = (key) => t[key] || translations.en[key];

  return (
    <section className="emb-section">
      <div className="emb-container">
        <div className="emb-header">
            <h2 className="emb-title">{safeT('title')}</h2>
            <p className="emb-subtitle">{safeT('desc')}</p>
        </div>
        <div className="emb-grid">
            <div className="emb-card">
                <div className="emb-icon-box"><Printer size={32} /></div>
                <h4>{safeT('brailleTitle')}</h4>
                <p>{safeT('brailleDesc')}</p>
            </div>
            <div className="emb-card">
                <div className="emb-icon-box"><Bot size={32} /></div>
                <h4>{safeT('autoTitle')}</h4>
                <p>{safeT('autoDesc')}</p>
            </div>
            <div className="emb-card">
                <div className="emb-icon-box"><Settings size={32} /></div>
                <h4>{safeT('modelTitle')}</h4>
                <p>{safeT('modelDesc')}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareProjects;