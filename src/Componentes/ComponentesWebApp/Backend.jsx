import React from 'react';
import './WebDevelopment.css';
import { useLanguage } from '../../LanguageContext';
import { 
  Server, 
  Database, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Globe 
} from 'lucide-react';

const translations = {
  en: {
    desc: "Engineered for performance. I build secure, scalable back-end architectures that power complex applications.",
    card1: "Scalable API Architecture",
    card1Desc: "RESTful endpoints with Laravel Sanctum authentication, resource transformation, and strict type safety.",
    card2: "Data Integrity & Performance",
    card2Desc: "Advanced MySQL schemas, indexing strategies for speed, and complex relationship management (ORM).",
    card3: "Linux & Cloud Infrastructure",
    card3Desc: "Bare-metal server administration (Ubuntu), Nginx configuration, SSH hardening, and Cloudflare DNS deployment.",
  },
  es: {
    desc: "Ingeniería orientada al rendimiento. Construyo arquitecturas backend seguras y escalables que impulsan aplicaciones complejas.",
    card1: "Arquitectura API Escalable",
    card1Desc: "Endpoints RESTful con autenticación Laravel Sanctum, transformación de recursos y seguridad de tipos estricta.",
    card2: "Integridad de Datos y Rendimiento",
    card2Desc: "Esquemas MySQL avanzados, estrategias de indexación para velocidad y gestión de relaciones complejas (ORM).",
    card3: "Infraestructura Linux y Cloud",
    card3Desc: "Administración de servidores bare-metal (Ubuntu), configuración Nginx, endurecimiento SSH y despliegue DNS en Cloudflare.",
  },
  fr: {
    desc: "Ingénierie axée sur la performance. Je construis des architectures backend sécurisées et évolutives.",
    card1: "Architecture API Évolutive",
    card1Desc: "Endpoints RESTful avec authentification Laravel Sanctum et transformation des ressources.",
    card2: "Intégrité des Données et Performance",
    card2Desc: "Schémas MySQL avancés, stratégies d'indexation pour la vitesse et gestion des relations complexes.",
    card3: "Infrastructure Linux et Cloud",
    card3Desc: "Administration de serveurs bare-metal (Ubuntu), configuration Nginx, sécurisation SSH et déploiement Cloudflare.",
  },
  de: {
    desc: "Auf Leistung ausgelegt. Ich baue sichere, skalierbare Backend-Architekturen für komplexe Anwendungen.",
    card1: "Skalierbare API-Architektur",
    card1Desc: "RESTful-Endpoints mit Laravel Sanctum-Authentifizierung und Ressourcentransformation.",
    card2: "Datenintegrität & Leistung",
    card2Desc: "Fortgeschrittene MySQL-Schemata, Indizierungsstrategien für Geschwindigkeit und komplexes Beziehungsmanagement.",
    card3: "Linux- & Cloud-Infrastruktur",
    card3Desc: "Bare-Metal-Serververwaltung (Ubuntu), Nginx-Konfiguration, SSH-Härtung und Cloudflare-DNS-Deployment.",
  }
};

const Backend = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section className="ue-section">
      <div className="ue-container">
        <div className="ue-subtitle-wrapper">
          <p className="ue-description">{t.desc}</p>
        </div>
        
        <div className="ue-grid">
           {/* Card 1: API Architecture */}
           <div className="ue-card">
              <div className="ue-card-content" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className="ue-icon">
                    <Server size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="ue-card-title">{t.card1}</h4>
                  <p className="ue-card-text">{t.card1Desc}</p>
              </div>
           </div>

           {/* Card 2: Database */}
           <div className="ue-card">
              <div className="ue-card-content" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className="ue-icon">
                    <Database size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="ue-card-title">{t.card2}</h4>
                  <p className="ue-card-text">{t.card2Desc}</p>
              </div>
           </div>

           {/* Card 3: Infrastructure */}
           <div className="ue-card">
              <div className="ue-card-content" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className="ue-icon">
                    <Terminal size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="ue-card-title">{t.card3}</h4>
                  <p className="ue-card-text">{t.card3Desc}</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Backend;