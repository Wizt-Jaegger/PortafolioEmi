import React from 'react';
import './EmbeddedStyles.css';
import { useLanguage } from '../../LanguageContext';
import { Cpu, Code2, Layers } from 'lucide-react';

const translations = {
  en: {
    title: "Firmware Engineering",
    desc: "Low-level programming and memory management for constrained systems.",
    cTitle: "C/C++ Mastery",
    cList: ["Pointers & Memory Management", "Data Structures (Structs/Unions)", "Hardware Abstraction Layers (HAL)"],
    microTitle: "Microcontrollers",
    microList: ["STM32 / ARM Cortex-M", "ESP32 (FreeRTOS)", "AVR (Arduino/Atmega)"],
    archTitle: "Systems Architecture",
    archList: ["Interrupt Handling (ISR)", "Real-Time Constraints", "Bootloaders & OTA Updates"]
  },
  es: {
    title: "Ingeniería de Firmware",
    desc: "Programación de bajo nivel y gestión de memoria para sistemas restringidos.",
    cTitle: "Dominio de C/C++",
    cList: ["Punteros y Gestión de Memoria", "Estructuras de Datos", "Capas de Abstracción de Hardware (HAL)"],
    microTitle: "Microcontroladores",
    microList: ["STM32 / ARM Cortex-M", "ESP32 (FreeRTOS)", "AVR (Arduino/Atmega)"],
    archTitle: "Arquitectura de Sistemas",
    archList: ["Manejo de Interrupciones (ISR)", "Restricciones de Tiempo Real", "Bootloaders y Actualizaciones OTA"]
  },
  fr: {
    title: "Ingénierie Firmware",
    desc: "Programmation bas niveau et gestion de la mémoire.",
    cTitle: "Maîtrise C/C++",
    cList: ["Pointeurs & Mémoire", "Structures de Données", "Couches d'Abstraction Matérielle"],
    microTitle: "Microcontrôleurs",
    microList: ["STM32 / ARM Cortex-M", "ESP32 (FreeRTOS)", "AVR (Arduino/Atmega)"],
    archTitle: "Architecture Système",
    archList: ["Gestion des Interruptions", "Temps Réel", "Bootloaders & OTA"]
  },
  de: {
    title: "Firmware-Entwicklung",
    desc: "Low-Level-Programmierung und Speicherverwaltung.",
    cTitle: "C/C++ Beherrschung",
    cList: ["Zeiger & Speicherverwaltung", "Datenstrukturen", "Hardware Abstraction Layers"],
    microTitle: "Mikrocontroller",
    microList: ["STM32 / ARM Cortex-M", "ESP32 (FreeRTOS)", "AVR (Arduino/Atmega)"],
    archTitle: "Systemarchitektur",
    archList: ["Interrupt-Behandlung", "Echtzeit-Anforderungen", "Bootloaders & OTA"]
  }
};

const FirmwareCore = () => {
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
                <div className="emb-icon-box"><Code2 size={32} /></div>
                <h4>{safeT('cTitle')}</h4>
                <ul className="emb-list">
                    {safeT('cList').map((item, i) => <li key={i}><Cpu size={16}/> {item}</li>)}
                </ul>
            </div>
            <div className="emb-card">
                <div className="emb-icon-box"><Cpu size={32} /></div>
                <h4>{safeT('microTitle')}</h4>
                <ul className="emb-list">
                    {safeT('microList').map((item, i) => <li key={i}><Cpu size={16}/> {item}</li>)}
                </ul>
            </div>
            <div className="emb-card">
                <div className="emb-icon-box"><Layers size={32} /></div>
                <h4>{safeT('archTitle')}</h4>
                <ul className="emb-list">
                    {safeT('archList').map((item, i) => <li key={i}><Cpu size={16}/> {item}</li>)}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FirmwareCore;