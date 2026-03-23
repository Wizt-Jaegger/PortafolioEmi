import React, { useState } from 'react';
import './WebDevelopment.css';
import { useLanguage } from '../../LanguageContext';

// Import Standard Images
import Mensajes from "../../assets/recursosWeb/mensajes.png";
import Ticket from "../../assets/recursosWeb/tickets.png";
import Reportes from "../../assets/recursosWeb/reportes.png";
import Usuarios from "../../assets/recursosWeb/usuarios.png";
import Posts from "../../assets/recursosWeb/posts.png";
import Login from "../../assets/recursosWeb/login.png";

// Import Extended Images
import MensajesExt from "../../assets/recursosWeb/mensajes-extended.png";
import TicketExt from "../../assets/recursosWeb/tickets-extended.png";
import ReportesExt from "../../assets/recursosWeb/reportes-extended.png";
import UsuariosExt from "../../assets/recursosWeb/usuarios-extended.png";
import PostsExt from "../../assets/recursosWeb/posts-extended.png";
import LoginExt from "../../assets/recursosWeb/login-extended.png";

import { 
    ChartNoAxesCombined, 
    Lock, 
    Tickets, 
    Laptop, 
    MessageSquare, 
    UserCog, 
    Maximize2, 
    X 
} from 'lucide-react';

const translations = {
  en: {
    subtitle: "I don't just write code; I build complete functional modules. (Click card to expand, Click image to zoom)",
    tickets: "Ticket Systems",
    ticketsDesc: "Support tracking and resolution workflows.",
    users: "User Management",
    usersDesc: "CRUD operations with Role-Based Access Control (RBAC).",
    reports: "Statistical Reports",
    reportsDesc: "Generating PDF/CSV reports and visual charts.",
    posts: "Content Management",
    postsDesc: "Blog posts, comments, and category management.",
    messaging: "Messaging System",
    messagingDesc: "Internal chat and notification systems.",
    security: "Auth & Security",
    securityDesc: "Login, Registration, and Password Recovery."
  },
  es: {
    subtitle: "No solo escribo código; construyo módulos funcionales completos. (Clic en tarjeta para expandir, Clic en imagen para zoom)",
    tickets: "Sistemas de Tickets",
    ticketsDesc: "Seguimiento de soporte y flujos de resolución.",
    users: "Gestión de Usuarios",
    usersDesc: "Operaciones CRUD con Control de Acceso Basado en Roles (RBAC).",
    reports: "Reportes Estadísticos",
    reportsDesc: "Generación de reportes PDF/CSV y gráficos visuales.",
    posts: "Gestión de Contenido",
    postsDesc: "Posts de blog, comentarios y gestión de categorías.",
    messaging: "Sistema de Mensajería",
    messagingDesc: "Chat interno y sistemas de notificación.",
    security: "Auth y Seguridad",
    securityDesc: "Login, Registro y Recuperación de Contraseñas."
  },
  fr: {
    subtitle: "Je n'écris pas seulement du code ; je construis des modules fonctionnels complets.",
    tickets: "Systèmes de Tickets",
    ticketsDesc: "Suivi du support et flux de résolution.",
    users: "Gestion des Utilisateurs",
    usersDesc: "Opérations CRUD avec contrôle d'accès basé sur les rôles (RBAC).",
    reports: "Rapports Statistiques",
    reportsDesc: "Génération de rapports PDF/CSV et graphiques visuels.",
    posts: "Gestion de Contenu",
    postsDesc: "Articles de blog, commentaires et gestion des catégories.",
    messaging: "Système de Messagerie",
    messagingDesc: "Systèmes de chat interne et de notification.",
    security: "Auth & Sécurité",
    securityDesc: "Connexion, inscription et récupération de mot de passe."
  },
  de: {
    subtitle: "Ich schreibe nicht nur Code; ich baue komplette funktionale Module.",
    tickets: "Ticketsysteme",
    ticketsDesc: "Support-Tracking und Lösungs-Workflows.",
    users: "Benutzerverwaltung",
    usersDesc: "CRUD-Operationen mit rollenbasierter Zugriffskontrolle (RBAC).",
    reports: "Statistische Berichte",
    reportsDesc: "Erstellung von PDF/CSV-Berichten und visuellen Diagrammen.",
    posts: "Content-Management",
    postsDesc: "Blog-Posts, Kommentare und Kategorienverwaltung.",
    messaging: "Nachrichtensystem",
    messagingDesc: "Interne Chat- und Benachrichtigungssysteme.",
    security: "Auth & Sicherheit",
    securityDesc: "Login, Registrierung und Passwortwiederherstellung."
  }
};

const WebDevelopment = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  // State for Accordion
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  // State for Full Screen Modal
  const [fullScreenImage, setFullScreenImage] = useState(null);

  // Toggle Accordion Card (Expand/Collapse)
  const handleCardClick = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // Open Full Screen Modal (Without collapsing the card)
  const handleImageClick = (e, imgExt) => {
    e.stopPropagation(); // CRITICAL: Stop bubbling so the card doesn't close
    setFullScreenImage(imgExt);
  };

  const features = [
    { 
      title: t.tickets, 
      desc: t.ticketsDesc, 
      icon: <Tickets />,
      img: Ticket,
      imgExt: TicketExt 
    },
    { 
      title: t.users, 
      desc: t.usersDesc, 
      icon: <UserCog />,
      img: Usuarios,
      imgExt: UsuariosExt
    },
    { 
      title: t.reports, 
      desc: t.reportsDesc, 
      icon:<ChartNoAxesCombined />, 
      img: Reportes,
      imgExt: ReportesExt
    },
    { 
      title: t.posts, 
      desc: t.postsDesc, 
      icon: <Laptop />,
      img: Posts,
      imgExt: PostsExt
    },
    { 
      title: t.messaging, 
      desc: t.messagingDesc, 
      icon: <MessageSquare />,
      img: Mensajes,
      imgExt: MensajesExt
    },
    { 
      title: t.security, 
      desc: t.securityDesc, 
      icon: <Lock />,
      img: Login,
      imgExt: LoginExt
    },
  ];

  return (
    <section className="ue-section">
      <div className="ue-container">
        <div className="ue-subtitle-wrapper">
          <p className="ue-description">{t.subtitle}</p>
        </div>
        
        <div className="ue-grid">
          {features.map((feature, index) => {
            const isExpanded = index === expandedIndex;

            return (
              <div 
                key={index} 
                className={`ue-card ue-card-interactive ${isExpanded ? 'expanded' : ''}`}
                // MAIN CLICK: Handles Expansion/Collapse logic
                onClick={() => handleCardClick(index)}
              >
                {/* IMAGE AREA: 
                    If expanded, clicking here triggers zoom (and stops card toggle).
                    The overlay is inside here, so it only covers the image.
                */}
                <div 
                  className="ue-expandable-img-wrapper" 
                  onClick={(e) => isExpanded && handleImageClick(e, feature.imgExt)}
                >
                    <img src={feature.img} alt={feature.title} />
                    
                    {/* Visual Hint Overlay - Only covers image because it is inside this wrapper */}
                    <div className="ue-zoom-overlay">
                        <Maximize2 size={32} color="#fff" />
                    </div>
                </div>

                {/* TEXT AREA: Bubbles up to main onClick to toggle card */}
                <div className="ue-card-content ue-feature-row">
                  <div className="ue-feature-icon-box">
                      {feature.icon}
                  </div>
                  <div>
                      <h4 className="ue-card-title">{feature.title}</h4>
                      <p className="ue-card-text">{feature.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULL SCREEN MODAL */}
      {fullScreenImage && (
        <div className="ue-fullscreen-modal" onClick={() => setFullScreenImage(null)}>
            <div className="ue-fullscreen-content" onClick={(e) => e.stopPropagation()}>
                <button className="ue-fullscreen-close" onClick={() => setFullScreenImage(null)}>
                    <X size={30} />
                </button>
                <img src={fullScreenImage} alt="Full View" />
            </div>
        </div>
      )}
    </section>
  );
};

export default WebDevelopment;