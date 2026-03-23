// src/components/About.jsx
import React from 'react';
import './AboutMe.css';
import { useLanguage } from '../../LanguageContext';

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};

const translations = {
  en: {
    aboutMe: "About Me",
    introduction: "I'm Luis Emiliano Reyes Gutiérrez.",
    description:
      "Front-End Developer & React.js Specialist with a strong background in Linux Infrastructure.",
    paragraph:
      "Result-oriented developer with a B.Sc. in IT Engineering (Thesis Concluded). I specialize in architecting complex, data-driven web applications using React.js and integrating them with robust back-ends like Laravel. My background in Linux systems and DevOps allows me to not only build interfaces but also manage deployments using Cloudflare and SSH. I am passionate about open-source, automation, and building seamless user experiences.",
    birthdate: "Birthdate",
    age: "Age",
    website: "Website",
    email: "Email",
    phone: "Phone",
    location: "Location",
    employment: "Employment Status",
    available: "Open to Work",
    hireMe: "Hire Me",
    education: "Education",
    edu1Title: "Polytechnic University of Morelos",
    edu1Desc:
      "B.S. in Information Technology Engineering | Coursework & Thesis Concluded Dec 2025. Focused on Distributed Systems and Web Development.",
    edu2Title: "Autonomous University of Morelos",
    edu2Desc: "Lab Technician in Digital Electronics",
    experience: "Experience / Key Projects",
    exp1Title: "Lead Full-Stack Developer | Escudo Ciudadano (Thesis)",
    exp1Desc:
      "Built an enterprise-grade Crime Management System with React, handling 4 user roles, clustering maps, and statistical dashboards.",
    exp2Title: "Front-End Specialist | Pa-Tours.com.mx",
    exp2Desc:
      "Developed a high-performance SPA using React.js and orchestrated deployment via Cloudflare ecosystem for sub-second load times.",
    exp3Title: "IT Support & Developer | Colegio W. Shakespeare",
    exp3Desc:
      "Engineered a custom React/Laravel grading system and managed internal Linux server infrastructure.",
  },
  es: {
    aboutMe: "Sobre Mí",
    introduction: "Soy Luis Emiliano Reyes Gutiérrez.",
    description:
      "Desarrollador Front-End y Especialista en React.js con sólida experiencia en infraestructura Linux.",
    paragraph:
      "Ingeniero en Tecnologías de la Información (Tesis Concluida) orientado a resultados. Me especializo en arquitectar aplicaciones web complejas basadas en datos utilizando React.js e integrarlas con backends robustos como Laravel. Mi experiencia en sistemas Linux y DevOps me permite no solo construir interfaces, sino también gestionar despliegues usando Cloudflare y SSH. Me apasiona el código abierto, la automatización y crear experiencias de usuario fluidas.",
    birthdate: "Fecha de Nacimiento",
    age: "Edad",
    website: "Sitio Web",
    email: "Correo Electrónico",
    phone: "Teléfono",
    location: "Ubicación",
    employment: "Situación Laboral",
    available: "Disponible",
    hireMe: "Contáctame",
    education: "Educación",
    edu1Title: "Universidad Politécnica de Morelos",
    edu1Desc:
      "Ingeniería en Tecnologías de la Información | Cursos y Tesis Concluidos Dic 2025. Enfoque en Sistemas Distribuidos y Desarrollo Web.",
    edu2Title: "Universidad Autónoma del Estado de Morelos",
    edu2Desc: "Técnico Laboratorista en Electrónica Digital.",
    experience: "Experiencia / Proyectos Clave",
    exp1Title: "Líder Desarrollador Full-Stack | Escudo Ciudadano (Tesis)",
    exp1Desc:
      "Construí un Sistema de Gestión Criminal empresarial con React, manejando 4 roles de usuario, mapas de clustering y dashboards estadísticos.",
    exp2Title: "Especialista Front-End | Pa-Tours.com.mx",
    exp2Desc:
      "Desarrollé una SPA de alto rendimiento usando React.js y orquesté el despliegue vía el ecosistema Cloudflare.",
    exp3Title: "Soporte TI y Desarrollador | Colegio W. Shakespeare",
    exp3Desc:
      "Diseñé un sistema de calificaciones personalizado en React/Laravel y administré la infraestructura de servidores Linux.",
  },
  fr: {
    aboutMe: "À propos de moi",
    introduction: "Je suis Luis Emiliano Reyes Gutiérrez.",
    description:
      "Développeur Front-End et Spécialiste React.js avec une solide expérience en infrastructure Linux.",
    paragraph:
      "Développeur axé sur les résultats avec une licence en ingénierie informatique (thèse terminée). Je me spécialise dans l'architecture d'applications web complexes utilisant React.js. Mon expérience des systèmes Linux et DevOps me permet non seulement de construire des interfaces, mais aussi de gérer les déploiements avec Cloudflare et SSH.",
    birthdate: "Date de naissance",
    age: "Âge",
    website: "Site Web",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    employment: "Statut professionnel",
    available: "Disponible",
    hireMe: "Engagez-moi",
    education: "Formation",
    edu1Title: "Université Polytechnique de Morelos",
    edu1Desc:
      "Licence en ingénierie informatique | Cours et thèse terminés en déc. 2025. Axé sur les systèmes distribués.",
    edu2Title: "Université Autonome de l'État de Morelos",
    edu2Desc: "Technicien en électronique numérique.",
    experience: "Expérience",
    exp1Title: "Lead Full-Stack Dev | Escudo Ciudadano (Thèse)",
    exp1Desc:
      "Système de gestion de la criminalité avec React, gérant 4 rôles utilisateurs et des cartes de clustering.",
    exp2Title: "Spécialiste Front-End | Pa-Tours.com.mx",
    exp2Desc:
      "Développement d'une SPA haute performance sous React.js et déploiement via Cloudflare.",
    exp3Title: "Support IT & Développeur | Colegio W. Shakespeare",
    exp3Desc:
      "Conception d'un système de notation React/Laravel et gestion de l'infrastructure Linux.",
  },
  de: {
    aboutMe: "Über mich",
    introduction: "Ich bin Luis Emiliano Reyes Gutiérrez.",
    description:
      "Front-End-Entwickler und React.js-Spezialist mit starkem Hintergrund in Linux-Infrastruktur.",
    paragraph:
      "Ergebnisorientierter Entwickler mit einem Bachelor in IT-Engineering (Thesis abgeschlossen). Ich spezialisiere mich auf die Architektur komplexer Webanwendungen mit React.js. Mein Hintergrund in Linux-Systemen und DevOps ermöglicht es mir, nicht nur Schnittstellen zu bauen, sondern auch Deployments mit Cloudflare und SSH zu verwalten.",
    birthdate: "Geburtsdatum",
    age: "Alter",
    website: "Webseite",
    email: "E-Mail",
    phone: "Telefon",
    location: "Standort",
    employment: "Beschäftigungsstatus",
    available: "Verfügbar",
    hireMe: "Engagiere mich",
    education: "Ausbildung",
    edu1Title: "Polytechnische Universität von Morelos",
    edu1Desc:
      "Bachelor in IT-Ingenieurwesen | Studium und Thesis abgeschlossen Dez 2025.",
    edu2Title: "Autonome Universität des Bundesstaates Morelos",
    edu2Desc: "Techniker für Digitale Elektronik.",
    experience: "Erfahrung",
    exp1Title: "Lead Full-Stack Dev | Escudo Ciudadano (Thesis)",
    exp1Desc:
      "Entwicklung eines Kriminalmanagementsystems mit React, inklusive 4 Benutzerrollen und Clustering-Karten.",
    exp2Title: "Front-End Spezialist | Pa-Tours.com.mx",
    exp2Desc:
      "Entwicklung einer High-Performance SPA mit React.js und Deployment über Cloudflare.",
    exp3Title: "IT-Support & Entwickler | Colegio W. Shakespeare",
    exp3Desc:
      "Entwicklung eines React/Laravel-Notensystems und Verwaltung der Linux-Serverinfrastruktur.",
  },
};

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const birthDate = '2001-10-17';
  const age = calculateAge(birthDate);

  // Updated Skills Array prioritizing Front-End & Cloud
  const skills = [
    { name: 'React.js (Hooks/Context)', percent: 95 },
    { name: 'JavaScript (ES6+)', percent: 90 },
    { name: 'HTML5/CSS3', percent: 95 },
    { name: 'Linux (Ubuntu/Debian)', percent: 90 },
    { name: 'Cloudflare / AWS', percent: 75 },
    { name: 'Laravel (PHP)', percent: 80 },
    { name: 'Git / GitHub', percent: 85 },
    { name: 'DevOps / SSH', percent: 80 },
    { name: 'C / C++', percent: 85 },
    { name: 'SQL (MySQL/SQLite)', percent: 85 },
  ];

  return (
    <section className="about sectionAbout" id="about">
      <div className="containerAbout">
        <div className="rowAbout">
          <div className="sectionAbout-title AboutPadd-15">
            <h2 style={{color:"#fff"}}>{t.aboutMe}</h2>
          </div>
        </div>
        <div className="rowAbout">
          <div className="about-content AboutPadd-15">
            <div className="rowAbout">
              <div className="about-text AboutPadd-15">
                <h3>
                  {t.introduction}
                  <span> {t.description}</span>
                </h3>
                <p>{t.paragraph}</p>
              </div>
            </div>
            <div className="rowAbout">
              <div className="personal-info AboutPadd-15">
                <div className="rowAbout">
                  <div className="info-item AboutPadd-15">
                    <p>{t.birthdate}: <span>October 17, 2001</span></p>
                  </div>
                  <div className="info-item AboutPadd-15">
                    <p>{t.age}: <span>{age}</span></p>
                  </div>
                  <div className="info-item AboutPadd-15">
                    <p>{t.website}: <span><a href="https://emireyes.com" target="_blank" rel="noopener noreferrer">emireyes.com</a></span></p>
                  </div>
                  <div className="info-item AboutPadd-15">
                    <p>{t.email}: <span>vilfront@gmail.com</span></p>
                  </div>
                  <div className="info-item AboutPadd-15">
                    <p>{t.phone}: <span>+52 777 990 49 60</span></p>
                  </div>
                  <div className="info-item AboutPadd-15">
                    <p>{t.location}: <span>Morelos, MX</span></p>
                  </div>
                  <div className="info-item AboutPadd-15">
                    <p>{t.employment}: <span>{t.available}</span></p>
                  </div>
                </div>
                <div className="rowAbout">
                  <div className="buttons AboutPadd-15">
                    <a href="#contact" data-section-index="1" className="btn hire-me">{t.hireMe}</a>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="skills AboutPadd-15">
                <div className="rowAbout">
                  {skills.map((skill, index) => (
                    <div className="skill-item AboutPadd-15" key={index}>
                      <h5>{skill.name}</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: `${skill.percent}%` }}></div>
                        <div className="skill-percent">{skill.percent}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="rowAbout">
              <div className="education AboutPadd-15">
                <h3 className="title">{t.education}</h3>
                <div className="rowAbout">
                  <div className="timeline-box AboutPadd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2021 - Dec 2025
                        </h3>
                        <h4 className="timeline-title">{t.edu1Title}</h4>
                        <p className="timeline-text">{t.edu1Desc}</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2017 - 2020
                        </h3>
                        <h4 className="timeline-title">{t.edu2Title}</h4>
                        <p className="timeline-text">{t.edu2Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE / KEY PROJECTS */}
              <div className="experience AboutPadd-15">
                <h3 className="title">{t.experience}</h3>
                <div className="rowAbout">
                  <div className="timeline-box AboutPadd-15">
                    <div className="timeline shadow-dark">
                      {/* Project 1: Escudo Ciudadano (Thesis) - Most Recent/Complex */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2024 - 2025</h3>
                        <h4 className="timeline-title">{t.exp1Title}</h4>
                        <p className="timeline-text">{t.exp1Desc}</p>
                      </div>
                       {/* Project 2: Pa-Tours */}
                       <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2023 - 2024</h3>
                        <h4 className="timeline-title">{t.exp2Title}</h4>
                        <p className="timeline-text">{t.exp2Desc}</p>
                      </div>
                      {/* Project 3: School System */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2023 - 2025</h3>
                        <h4 className="timeline-title">{t.exp3Title}</h4>
                        <p className="timeline-text">{t.exp3Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;