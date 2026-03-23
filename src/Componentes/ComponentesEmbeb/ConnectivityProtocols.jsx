import React from 'react';
import './EmbeddedStyles.css';
import { useLanguage } from '../../LanguageContext';
import { Wifi, Radio, Cable } from 'lucide-react';

const translations = {
  en: {
    title: "Connectivity & Protocols",
    desc: "Ensuring reliable communication between devices and the cloud.",
    serialTitle: "Serial Communication",
    serialDesc: "UART, SPI, and I2C implementation for sensor data acquisition and display modules.",
    iotTitle: "Internet of Things (IoT)",
    iotDesc: "Connecting embedded devices to the web using MQTT and HTTP over Wi-Fi (ESP32).",
    signalTitle: "Signal Processing",
    signalDesc: "ADC/DAC conversion, PWM signal generation for motor control, and logic analysis."
  },
  es: {
    title: "Conectividad y Protocolos",
    desc: "Asegurando comunicación confiable entre dispositivos y la nube.",
    serialTitle: "Comunicación Serial",
    serialDesc: "Implementación de UART, SPI e I2C para adquisición de datos de sensores y módulos de pantalla.",
    iotTitle: "Internet de las Cosas (IoT)",
    iotDesc: "Conexión de dispositivos embebidos a la web usando MQTT y HTTP sobre Wi-Fi (ESP32).",
    signalTitle: "Procesamiento de Señales",
    signalDesc: "Conversión ADC/DAC, generación de señales PWM para control de motores y análisis lógico."
  },
  // Add fr/de as needed
};

const ConnectivityProtocols = () => {
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
                <div className="emb-icon-box"><Cable size={32} /></div>
                <h4>{safeT('serialTitle')}</h4>
                <p>{safeT('serialDesc')}</p>
            </div>
            <div className="emb-card">
                <div className="emb-icon-box"><Wifi size={32} /></div>
                <h4>{safeT('iotTitle')}</h4>
                <p>{safeT('iotDesc')}</p>
            </div>
            <div className="emb-card">
                <div className="emb-icon-box"><Radio size={32} /></div>
                <h4>{safeT('signalTitle')}</h4>
                <p>{safeT('signalDesc')}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectivityProtocols;