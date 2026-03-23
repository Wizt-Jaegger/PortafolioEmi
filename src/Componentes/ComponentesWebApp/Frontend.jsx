import React, { useState, useRef, useEffect, useCallback } from 'react';
import './WebDevelopment.css';
import Mapa from "../../assets/recursosWeb/mapa.png";
import Landing from "../../assets/recursosWeb/landing.png";
import Dashboard from "../../assets/recursosWeb/dashboard.png";
import Mobile from "../../assets/recursosWeb/mobile.png";
import Forms from "../../assets/recursosWeb/forms.png";

import { useLanguage } from '../../LanguageContext';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const translations = {
  // ... (Keep your existing translations exactly as they are)
  en: {
    desc: "Building robust, scalable front-end architectures with modern React standards.",
    card1Title: "Modern React Patterns",
    card1Desc: "Custom Hooks, Context API, and Reusable Component Architecture.",
    card2Title: "Data Visualization",
    card2Desc: "Interactive clustering maps (Leaflet) and statistical charting.",
    card3Title: "High-Performance SPAs",
    card3Desc: "SEO-optimized Single Page Apps with Cloudflare deployment.",
    card4Title: "Admin Dashboards",
    card4Desc: "Role-Based Access Control (RBAC) and dynamic routing logic.",
    card5Title: "Complex State & Forms",
    card5Desc: "Multi-step data entry with real-time validation and error handling.",
    clickHint: "Click to view full image"
  },
  es: {
    desc: "Construcción de arquitecturas frontend robustas con estándares modernos de React.",
    card1Title: "Patrones Modernos React",
    card1Desc: "Custom Hooks, Context API y Arquitectura de Componentes Reusables.",
    card2Title: "Visualización de Datos",
    card2Desc: "Mapas interactivos de clustering (Leaflet) y gráficos estadísticos.",
    card3Title: "SPAs de Alto Rendimiento",
    card3Desc: "Single Page Apps optimizadas para SEO y desplegadas en Cloudflare.",
    card4Title: "Dashboards Administrativos",
    card4Desc: "Control de Acceso Basado en Roles (RBAC) y enrutamiento dinámico.",
    card5Title: "Estado Complejo y Forms",
    card5Desc: "Ingreso de datos multi-paso con validación en tiempo real.",
    clickHint: "Clic para ver imagen completa"
  },
  fr: {
    desc: "Construction d'architectures frontend robustes avec les standards React modernes.",
    card1Title: "Modèles React Modernes",
    card1Desc: "Custom Hooks, Context API et architecture de composants réutilisables.",
    card2Title: "Visualisation de Données",
    card2Desc: "Cartes interactives (Leaflet) et graphiques statistiques.",
    card3Title: "SPAs Haute Performance",
    card3Desc: "Applications optimisées SEO et déployées sur Cloudflare.",
    card4Title: "Tableaux de Bord Admin",
    card4Desc: "Contrôle d'accès basé sur les rôles (RBAC) et routage dynamique.",
    card5Title: "État Complexe et Formulaires",
    card5Desc: "Saisie de données multi-étapes avec validation en temps réel.",
    clickHint: "Cliquez pour voir l'image complète"
  },
  de: {
    desc: "Aufbau robuster Frontend-Architekturen mit modernen React-Standards.",
    card1Title: "Moderne React-Muster",
    card1Desc: "Custom Hooks, Context API und wiederverwendbare Komponenten.",
    card2Title: "Datenvisualisierung",
    card2Desc: "Interaktive Clustering-Karten (Leaflet) und statistische Diagramme.",
    card3Title: "Hochleistungs-SPAs",
    card3Desc: "SEO-optimierte Single Page Apps mit Cloudflare-Deployment.",
    card4Title: "Admin-Dashboards",
    card4Desc: "Rollenbasierte Zugriffskontrolle (RBAC) und dynamisches Routing.",
    card5Title: "Komplexer State & Formulare",
    card5Desc: "Mehrstufige Dateneingabe mit Echtzeit-Validierung.",
    clickHint: "Klicken für Vollbild"
  }
};

const Frontend = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // NEW: State to track if the user's mouse is over the carousel
  const [isHovering, setIsHovering] = useState(false);
  
  const trackRef = useRef(null);

  const initialProjects = [
    { id: 1, title: t.card1Title, desc: t.card1Desc, img: Landing },
    { id: 2, title: t.card2Title, desc: t.card2Desc, img: Mapa },
    { id: 3, title: t.card3Title, desc: t.card3Desc, img: Mobile },
    { id: 4, title: t.card4Title, desc: t.card4Desc, img: Dashboard },
    { id: 5, title: t.card5Title, desc: t.card5Desc, img: Forms }
  ];

  const [items, setItems] = useState(initialProjects);

  // --- Smooth Loop Logic (Wrapped in useCallback) ---
  const handleNext = useCallback(() => {
    if (isAnimating || !trackRef.current) return;
    setIsAnimating(true);

    const track = trackRef.current;
    const shift = track.children[1].offsetLeft - track.children[0].offsetLeft;

    track.style.transition = 'transform 0.3s ease-in-out';
    track.style.transform = `translateX(-${shift}px)`;

    setTimeout(() => {
      track.appendChild(track.firstElementChild);
      track.style.transition = 'none';
      track.style.transform = 'none';

      setItems((prev) => {
        const newItems = [...prev];
        newItems.push(newItems.shift());
        return newItems;
      });

      setIsAnimating(false);
    }, 300); 
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating || !trackRef.current) return;
    setIsAnimating(true);

    const track = trackRef.current;
    const shift = track.children[1].offsetLeft - track.children[0].offsetLeft;

    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform = `translateX(-${shift}px)`;

    void track.offsetWidth; 

    track.style.transition = 'transform 0.3s ease-in-out';
    track.style.transform = 'translateX(0)';

    setTimeout(() => {
      setItems((prev) => {
        const newItems = [...prev];
        newItems.unshift(newItems.pop());
        return newItems;
      });

      track.style.transition = 'none';
      track.style.transform = 'none';

      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  // --- NEW: Auto-Play Interval ---
  useEffect(() => {
    // Do not start the timer if the user is hovering, viewing an image, or if it's currently sliding
    if (isHovering || selectedImage || isAnimating) return;

    // Set the auto-scroll interval (3500ms = 3.5 seconds)
    const autoplayTimer = setInterval(() => {
      handleNext();
    }, 3500);

    // Clean up the timer when the component re-renders or unmounts
    return () => clearInterval(autoplayTimer);
    
    // By tracking `items`, the timer perfectly resets to 3.5s if the user clicks a button manually
  }, [isHovering, selectedImage, isAnimating, items, handleNext]);

  return (
    <section className="ue-section">
      <div className="ue-container">
        <div className="ue-subtitle-wrapper">
          <p className="ue-description">{t.desc}</p>
        </div>
        
        {/* NEW: Added onMouseEnter and onMouseLeave events to detect hover state */}
        <div 
            className="ue-carousel-wrapper"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
          
          <button className="ue-nav-btn left" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>

          <div style={{ overflow: 'hidden', width: '100%', padding: '10px 0' }}>
            <div 
                className="ue-carousel-no-bar" 
                ref={trackRef} 
                style={{ overflow: 'visible', paddingBottom: 0 }}
            >
                {items.map((item) => (
                <div 
                    key={item.id} 
                    className="ue-card ue-card-interactive ue-card-fixed-size"
                    onClick={() => setSelectedImage(item.img)}
                >
                    <div className="ue-img-wrapper-standard">
                    <img src={item.img} alt={item.title} className="ue-img-standard" />
                    
                    <div className="ue-zoom-overlay">
                        <Maximize2 size={32} color="#fff" />
                        <span style={{color:'white', marginTop:'10px', fontSize:'0.8rem'}}>{t.clickHint}</span>
                    </div>
                    </div>
                    
                    <div className="ue-card-content">
                    <h4 className="ue-card-title">{item.title}</h4>
                    <p className="ue-card-text">{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>
          </div>

          <button className="ue-nav-btn right" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>

        </div>
      </div>

      {selectedImage && (
        <div className="ue-fullscreen-modal" onClick={() => setSelectedImage(null)}>
          <div className="ue-fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="ue-fullscreen-close" onClick={() => setSelectedImage(null)}>
              <X size={30} />
            </button>
            <img src={selectedImage} alt="Full View" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Frontend;