import { useState } from "react";
import "./App.css";

function App() {
  const [lang, setLang] = useState("es");

  const translations = {
    aboutMe: {
      es: "Sobre Mí",
      en: "About Me",
      pt: "Sobre Mim",
      de: "Über Mich",
      fr: "Sur Moi",
      it: "Su di Me",
    },
    aboutText: {
      es: "Apasionado estudiante de Ingeniería en Tecnologías y Servicios de Telecomunicación, con enfoque en desarrollo web, ciberseguridad e inteligencia artificial. Estoy en búsqueda de mi primera experiencia profesional, donde pueda aprender, crecer y contribuir de manera significativa.",
      en: "Passionate Telecommunications Technologies and Services Engineering student, with a focus on web development, cybersecurity, and artificial intelligence. I am seeking my first professional experience to learn, grow, and contribute meaningfully.",
      pt: "Estudante apaixonado de Engenharia em Tecnologias e Serviços de Telecomunicação, com foco em desenvolvimento web, segurança cibernética e inteligência artificial. Busco minha primeira experiência profissional para aprender, crescer e contribuir de maneira significativa.",
      de: "Leidenschaftlicher Student der Telekommunikationstechnologien und -dienstleistungen mit Schwerpunkt Webentwicklung, Cybersicherheit und künstliche Intelligenz. Ich suche meine erste berufliche Erfahrung, um zu lernen, zu wachsen und bedeutungsvoll beizutragen.",
      fr: "Étudiant passionné en Ingénierie des Technologies et Services de Télécommunications, axé sur le développement web, la cybersécurité et l'intelligence artificielle. Je cherche ma première expérience professionnelle pour apprendre, évoluer et contribuer de manière significative.",
      it: "Studente appassionato di Ingegneria delle Tecnologie e dei Servizi delle Telecomunicazioni, con focus sullo sviluppo web, la sicurezza informatica e l'intelligenza artificiale. Cerco la mia prima esperienza professionale per imparare, crescere e contribuire in modo significativo.",
    },
    educationTitle: {
      es: "Formación",
      en: "Education",
      pt: "Formação",
      de: "Bildung",
      fr: "Formation",
      it: "Formazione",
    },
    coursesTitle: {
      es: "Cursos",
      en: "Courses",
      pt: "Cursos",
      de: "Kurse",
      fr: "Cours",
      it: "Corsi",
    },
    languagesTitle: {
      es: "Idiomas",
      en: "Languages",
      pt: "Línguas",
      de: "Sprachen",
      fr: "Langues",
      it: "Lingue",
    },
    skillsTitle: {
      es: "Herramientas y Habilidades",
      en: "Tools and Skills",
      pt: "Ferramentas e Habilidades",
      de: "Werkzeuge und Fähigkeiten",
      fr: "Outils et Compétences",
      it: "Strumenti e Competenze",
    },
    contactTitle: {
      es: "Contacto",
      en: "Contact",
      pt: "Contato",
      de: "Kontakt",
      fr: "Contact",
      it: "Contatti",
    },
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <img src="foto.jpeg" alt="Profile" className="profile-pic" />
          <div className="header-text">
            <h1>Mario Fernández Álvarez</h1>
            <p>
              Estudiante de Ingeniería | Telecomunicaciones, Programación,
              Desarrollo Web, IA y Ciberseguridad
            </p>
          </div>
        </div>
        {/* Language Selector */}
        <div className="language-toggle vertical">
          <button onClick={() => setLang("es")}>ES</button>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("pt")}>PT</button>
          <button onClick={() => setLang("de")}>DE</button>
          <button onClick={() => setLang("fr")}>FR</button>
          <button onClick={() => setLang("it")}>IT</button>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="card about-section">
        <h2>{translations.aboutMe[lang]}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: translations.aboutText[lang] }}
        ></p>
      </section>

      <div className="grid-container">
        {/* Education Section */}
        <section id="education" className="card">
          <h2>{translations.educationTitle[lang]}</h2>
          <ul>
            <li>
              {lang === "es"
                ? "Grado en Ingeniería en Tecnologías y Servicios de Telecomunicación - Universidad de Oviedo (2021-2026)"
                : lang === "pt"
                ? "Bacharelado em Engenharia em Tecnologias e Serviços de Telecomunicação - Universidade de Oviedo (2021-2026)"
                : lang === "de"
                ? "Bachelor in Telekommunikationstechnologien und -dienstleistungen - Universität von Oviedo (2021-2026)"
                : lang === "fr"
                ? "Licence en Ingénierie des Technologies et Services de Télécommunications - Université d'Oviedo (2021-2026)"
                : lang === "it"
                ? "Laurea in Ingegneria delle Tecnologie e dei Servizi delle Telecomunicazioni - Università di Oviedo (2021-2026)"
                : "BSc in Telecommunications Technologies and Services Engineering - University of Oviedo (2021-2026)"}
            </li>
            <li>
              {lang === "es"
                ? "Grado en Ingeniería de Telecomunicaciones e Informática - ISCTE Instituto Universitario de Lisboa (Erasmus 2024-2025)"
                : lang === "pt"
                ? "Bacharelado em Engenharia de Telecomunicações e Informática - ISCTE Instituto Universitário de Lisboa (Erasmus 2024-2025)"
                : lang === "de"
                ? "Bachelor in Telekommunikation und Informatik - ISCTE Universitätsinstitut von Lissabon (Erasmus 2024-2025)"
                : lang === "fr"
                ? "Licence en Ingénierie des Télécommunications et Informatique - ISCTE Institut Universitaire de Lisbonne (Erasmus 2024-2025)"
                : lang === "it"
                ? "Laurea in Ingegneria delle Telecomunicazioni e Informatica - ISCTE Istituto Universitario di Lisbona (Erasmus 2024-2025)"
                : "BSc in Telecommunications and IT - ISCTE University Institute of Lisbon (Erasmus 2024-2025)"}
            </li>
          </ul>
        </section>

        {/* Courses Section */}
        <section id="courses" className="card">
          <h2>{translations.coursesTitle[lang]}</h2>
          <ul>
            <li>
              Desarrollo Python Avanzado - UNED{" "}
              <a href="/Certificado_curso_Python_Avanzado_UNED.pdf">🗒️</a>
            </li>
            <li>
              Desarrollo y Diseño Web - Universidad Politécnica de Valencia{" "}
              <a href="/Certificado_curso_Desarrollo_Web_UPV.pdf">🗒️</a>
            </li>
          </ul>
        </section>

        {/* Languages Section */}
        <section id="languages" className="card">
          <h2>{translations.languagesTitle[lang]}</h2>
          <ul>
            <li>
              {lang === "es"
                ? "Inglés - B2"
                : lang === "en"
                ? "English - B2"
                : lang === "pt"
                ? "Inglês - B2"
                : lang === "de"
                ? "Englisch - B2"
                : lang === "fr"
                ? "Anglais - B2"
                : "Inglese - B2"}{" "}
              <a href="/Certificado_Cambridge_B2.pdf">🗒️</a>
            </li>
            <li>
              {lang === "es"
                ? "Francés - A2"
                : lang === "en"
                ? "French - A2"
                : lang === "pt"
                ? "Francês - A2"
                : lang === "de"
                ? "Französisch - A2"
                : lang === "fr"
                ? "Français - A2"
                : "Francese - A2"}
            </li>
            <li>
              {lang === "es"
                ? "Español - Nativo"
                : lang === "en"
                ? "Spanish - Native"
                : lang === "pt"
                ? "Espanhol - Nativo"
                : lang === "de"
                ? "Spanisch - Muttersprache"
                : lang === "fr"
                ? "Espagnol - Natif"
                : "Spagnolo - Madrelingua"}
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills" className="card skills-double">
          <h2>{translations.skillsTitle[lang]}</h2>
          <div className="skills-grid">
            <ul>
              <li>Python</li>
              <li>HTML, CSS, JavaScript</li>
              <li>React, NodeJS</li>
              <li>MATLAB</li>
            </ul>
            <ul>
              <li>C++, Java</li>
              <li>VS Code, Eclipse, PyCharm</li>
              <li>Packet Tracer, VirtualBox, Photoshop</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="card">
          <h2>{translations.contactTitle[lang]}</h2>
          <p>
            {lang === "es"
              ? "Teléfono"
              : lang === "en"
              ? "Phone"
              : lang === "pt"
              ? "Telefone"
              : lang === "de"
              ? "Telefon"
              : lang === "fr"
              ? "Téléphone"
              : "Telefono"}
            : <a href="tel:+34688924825">+34 688 92 48 25</a>
          </p>
          <p>
            Email: <a href="mailto:mario678f@gmail.com">mario678f@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/mario-fernández-álvarez-38b20a318">
              Mario Fernández Álvarez
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
