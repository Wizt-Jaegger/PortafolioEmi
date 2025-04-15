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
      "Final-term IT Engineering student with a strong interest in low-level system development.",
    paragraph:
      "Electronics technician and self-driven developer focused on full-stack, DevOps, and embedded Linux. Passionate about building reliable software solutions and collaborating on open-source projects. Comfortable working with Linux systems, writing scripts in Bash/Python, and programming in C. Open to remote opportunities where I can grow in systems programming, kernel development, and Rust.",
    birthdate: "Birthdate",
    age: "Age",
    website: "Website",
    email: "Email",
    phone: "Phone",
    location: "Location",
    employment: "Employment Status",
    available: "Available",
    hireMe: "Hire Me",
    education: "Education",
    edu1Title: "Polytechnic University of Morelos",
    edu1Desc:
      "B.S. in Information Technology Engineering | Focused on systems analysis, design, and implementation of IT solutions.",
    edu2Title: "Autonomous University of Morelos",
    edu2Desc: "Technical degree in Digital Electronics.",
    experience: "Experience",
    exp1Title: "General Assistant | Casa de la Cultura, Jiutepec",
    exp1Desc:
      "Vendor management, creative development, teamwork, customer service.",
    exp2Title: "Braille Printer Project | Hack for Equality",
    exp2Desc:
      "Designed logic, electronics, 3D model, and firmware.",
    exp3Title: "Grading Portal Developer | Colegio William Shakespeare",
    exp3Desc:
      "System design, DevOps, backend/frontend integration, and documentation.",
  },
  es: {
    aboutMe: "Sobre Mí",
    introduction: "Soy Luis Emiliano Reyes Gutiérrez.",
    description:
      "Estudiante de último cuatrimestre de Ingeniería en Tecnologías de la Información con gran interés en desarrollo de sistemas de bajo nivel.",
    paragraph:
      "Técnico en electrónica y desarrollador autodidacta enfocado en full-stack, DevOps y Linux embebido. Apasionado por construir soluciones de software confiables y colaborar en proyectos de código abierto. Cómodo trabajando en sistemas Linux, escribiendo scripts en Bash/Python y programando en C. Abierto a oportunidades remotas donde pueda crecer en programación de sistemas, desarrollo de kernel y Rust.",
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
      "Ingeniería en Tecnologías de la Información | Enfocado en análisis, diseño e implementación de soluciones informáticas.",
    edu2Title: "Universidad Autónoma del Estado de Morelos",
    edu2Desc: "Técnico en Electrónica Digital.",
    experience: "Experiencia",
    exp1Title: "Asistente General | Casa de la Cultura, Jiutepec",
    exp1Desc:
      "Gestión de proveedores, desarrollo creativo, trabajo en equipo, atención al cliente.",
    exp2Title: "Proyecto de Impresora Braille | Hack for Equality",
    exp2Desc:
      "Diseño de lógica, electrónica, modelo 3D y firmware.",
    exp3Title: "Desarrollador del Portal de Calificaciones | Colegio William Shakespeare",
    exp3Desc:
      "Diseño del sistema, DevOps, integración backend/frontend y documentación.",
  },
  fr: {
    aboutMe: "À propos de moi",
    introduction: "Je suis Luis Emiliano Reyes Gutiérrez.",
    description:
      "Étudiant en dernière année d'ingénierie en technologies de l'information, avec un fort intérêt pour le développement de systèmes bas niveau.",
    paragraph:
      "Technicien en électronique et développeur autodidacte axé sur le full-stack, DevOps et Linux embarqué. Passionné par la création de solutions logicielles fiables et la collaboration sur des projets open source. À l'aise avec les systèmes Linux, l'écriture de scripts en Bash/Python et la programmation en C. Ouvert aux opportunités à distance dans la programmation système, le développement du noyau et Rust.",
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
      "Licence en ingénierie des technologies de l'information | Axée sur l'analyse, la conception et la mise en œuvre de solutions informatiques.",
    edu2Title: "Université Autonome de l'État de Morelos",
    edu2Desc: "Diplôme technique en électronique numérique.",
    experience: "Expérience",
    exp1Title: "Assistant général | Casa de la Cultura, Jiutepec",
    exp1Desc:
      "Gestion des fournisseurs, développement créatif, travail en équipe, service client.",
    exp2Title: "Projet d'imprimante Braille | Hack for Equality",
    exp2Desc:
      "Conception de la logique, de l'électronique, du modèle 3D et du firmware.",
    exp3Title: "Développeur du portail de notes | Colegio William Shakespeare",
    exp3Desc:
      "Conception du système, DevOps, intégration backend/frontend et documentation.",
  },
  de: {
    aboutMe: "Über mich",
    introduction: "Ich bin Luis Emiliano Reyes Gutiérrez.",
    description:
      "IT-Ingenieurstudent im letzten Semester mit großem Interesse an der Entwicklung von Low-Level-Systemen.",
    paragraph:
      "Elektroniker und autodidaktischer Entwickler mit Fokus auf Full-Stack, DevOps und Embedded Linux. Leidenschaftlich daran interessiert, zuverlässige Softwarelösungen zu entwickeln und an Open-Source-Projekten mitzuarbeiten. Vertraut mit Linux-Systemen, Bash-/Python-Skripten und C-Programmierung. Offen für Remote-Möglichkeiten im Bereich Systemprogrammierung, Kernelentwicklung und Rust.",
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
      "Bachelor in Informationstechnologie-Ingenieurwesen | Schwerpunkt auf Analyse, Design und Implementierung von IT-Lösungen.",
    edu2Title: "Autonome Universität des Bundesstaates Morelos",
    edu2Desc: "Technischer Abschluss in digitaler Elektronik.",
    experience: "Erfahrung",
    exp1Title: "Allgemeiner Assistent | Casa de la Cultura, Jiutepec",
    exp1Desc:
      "Lieferantenmanagement, kreative Entwicklung, Teamarbeit, Kundenservice.",
    exp2Title: "Braille-Drucker-Projekt | Hack for Equality",
    exp2Desc:
      "Entwicklung von Logik, Elektronik, 3D-Modell und Firmware.",
    exp3Title: "Notenportal-Entwickler | Colegio William Shakespeare",
    exp3Desc:
      "Systemdesign, DevOps, Backend-/Frontend-Integration und Dokumentation.",
  },
};

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const birthDate = '2001-10-17';
  const age = calculateAge(birthDate);

  return (
    <section className="about sectionAbout" id="about">
      <div className="containerAbout">
        <div className="rowAbout">
          <div className="sectionAbout-title AboutPadd-15">
            <h2>{t.aboutMe}</h2>
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
                    <p>{t.website}: <span><a href="https://wizt-jaegger.github.io/portafolio-website/" target="_blank" rel="noopener noreferrer">My Portfolio</a></span></p>
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

              {/* Skills no requiere traducción por nombre propio */}
              <div className="skills AboutPadd-15">
                <div className="rowAbout">
                  {[
                    { name: 'C', percent: 90 },
                    { name: 'Rust (learning)', percent: 30 },
                    { name: 'Linux (Ubuntu/Debian/Fedora/Arch3)', percent: 90 },
                    { name: 'Git', percent: 65 },
                    { name: 'Python', percent: 65 },
                    { name: 'Bash', percent: 60 },
                    { name: 'HTML/CSS/JS', percent: 90 },
                    { name: 'Laravel', percent: 78 },
                    { name: 'DevOps', percent: 90 },
                    { name: 'Arduino', percent: 80 },
                    { name: 'MySQL/SQLite', percent: 85 },
                    { name: 'React', percent: 90 }
                  ].map((skill, index) => (
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
                          <i className="fa fa-calendar"></i> June 2021 - Present
                        </h3>
                        <h4 className="timeline-title">{t.edu1Title}</h4>
                        <p className="timeline-text">{t.edu1Desc}</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> June 2017 - August 2020
                        </h3>
                        <h4 className="timeline-title">{t.edu2Title}</h4>
                        <p className="timeline-text">{t.edu2Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="experience AboutPadd-15">
                <h3 className="title">{t.experience}</h3>
                <div className="rowAbout">
                  <div className="timeline-box AboutPadd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Oct 2017 - 2018</h3>
                        <h4 className="timeline-title">{t.exp1Title}</h4>
                        <p className="timeline-text">{t.exp1Desc}</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Mar 2022 - Present</h3>
                        <h4 className="timeline-title">{t.exp2Title}</h4>
                        <p className="timeline-text">{t.exp2Desc}</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i> Apr 2024 - Present</h3>
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
