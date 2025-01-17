import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/navbar.css";
import "./assets/css/index.css";
import "./assets/css/login.css";
import "./assets/css/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import chapu from "./assets/images/chapu.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import { motion } from "framer-motion";

import Contact from "./contact";
import team1 from "./assets/images/team1.png";
import team2 from "./assets/images/team2.png";
import team3 from "./assets/images/team3.png";
import team4 from "./assets/images/team4.png";
import team5 from "./assets/images/team5.png";
import team6 from "./assets/images/team6.png";
import contigo from "./assets/images/contigo.png";
import mac from "./assets/images/mac.png";
import totalplay from "./assets/images/totalplay.png";
import elektra from "./assets/images/elektra.png";
import fortem from "./assets/images/fortem.png";
import dila from "./assets/images/dila.png";

// Importar la imagen
import logoMxcBlanco from "./assets/images/logomxc-blanco.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 600, // Duración de animaciones
      easing: "ease-out-cubic",
      once: true, // Animar solo una vez
    });
    AOS.refreshHard(); // Asegura que detecte cambios dinámicos
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand"></a>
          <img
            src={logoMxcBlanco}
            alt="Logotipo de MXC Capital"
            className="logo-small"
          />

          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#hero" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link">
                  Equipo
                </a>
              </li>

              <li className="nav-item">
                <a href="#track" className="nav-link">
                  Track Record
                </a>
              </li>
              <li className="nav-item">
                <a href="#columns" className="nav-link">
                  Productos
                </a>
              </li>

              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contacto
                </a>
              </li>

              <li className="nav-item">
                <a href="/login" className="btn btn-outline-light ms-3">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header
        id="hero"
        className="hero_area text-center text-white"
        data-aos="fade-up"
      >
        <div className="container py-5">
          <h1 className="display-4">Bienvenido a MXC Capital</h1>
          <p className="lead">
            Innovamos el acceso al crédito y capital privado.
          </p>
          <button className="btn btn-light btn-lg mt-3">Conócenos</button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4" data-aos="fade-up">
            Acerca de Nosotros
          </h2>
          <div className="text-muted" data-aos="fade-up">
            <p>
              MXC Capital es una Banca de Inversión Independiente con amplia
              experiencia en levantamiento de capital los Inversionistas
              Institucionales de México, transacciones públicas y privadas,
              emisiones de deuda en el mercado local y levantamiento de capital
              privado.
            </p>
            <p>
              En MXC Capital, transformamos el acceso al capital mediante
              estrategias innovadoras y un equipo comprometido con el éxito de
              nuestros clientes.
            </p>
          </div>

          <img
            src={logoMxcBlanco}
            alt="Logotipo de MXC Capital"
            className="logo-small"
          />
        </div>
      </section>
      {/* Equipo y Features Section */}
      {/* Equipo y Features Section */}
      <section id="team" className="text-center">
        <div className="container">
          <h2 data-aos="fade-up">Nuestro Equipo</h2>
          <div className="row">
            {[
              {
                name: "Luis Armando Alvarez",
                position: "Founding Managing Partner",
                img: team1,
                bio: "Luis lidera MXC Capital con una visión estratégica y un enfoque en innovación.",
              },
              {
                name: "Paulina Ezquerra San Martin",
                position: "Managing Partner",
                img: team2,
                bio: "Paulina tiene experiencia sobresaliente liderando IPOs en el sector de Fibras en México y BMV.",
              },
              {
                name: "Guillermo Del Camino",
                position: "Asociado",
                img: team3,
                bio: "Guillermo lidera el análisis para los proyectos de Banca de Inversión.",
              },
              {
                name: "Pedro Serrano",
                position: "Analista Senior",
                img: team4,
                bio: "Pedro apoya en la estructuración y ejecución de estrategias financieras complejas.",
              },
              {
                name: "Paulina Alvarez",
                position: "Analista Senior",
                img: team5,
                bio: "Paulina realiza análisis detallados para proyectos de inversión y mercados financieros.",
              },
              {
                name: "Juan Barreto",
                position: "Analista",
                img: team6,
                bio: "Juan gestiona tareas clave en proyectos de análisis y ejecución financiera.",
              },

              // Agrega más miembros según sea necesario
            ].map((member, index) => (
              <div
                className="col-md-4 col-lg-4 mb-4"
                key={index}
                data-aos="fade-up"
              >
                <div
                  className={`team-card ${member.expanded ? "expanded" : ""}`}
                  onClick={() => (member.expanded = !member.expanded)}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid"
                  />
                  <h5>{member.name}</h5>
                  <p>{member.position}</p>
                  <button>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="expanded-content">
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-5">
          <h4 data-aos="fade-up">Un equipo experimentado en:</h4>
          <p> </p>
          <div className="row">
            {[
              {
                icon: "fas fa-lightbulb",
                title: "Originación",
                description:
                  "Desde Empresas que buscan listarse (BMV) hasta líneas de crédito estructuradas.",
              },
              {
                icon: "fas fa-cogs",
                title: "Estructuración",
                description:
                  "Experiencia probada en transacciones relevantes. Ayudamos a definir el vehículo ideal y ejecutando.",
              },
              {
                icon: "fas fa-check-circle",
                title: "Levantamiento",
                description:
                  "Tenemos experiencia probada levantando Capital, desde fondos privados, hasta +15 IPOs.",
              },
            ].map((feature, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="feature-card">
                  <i className={feature.icon}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Track Record */}
      {/* Track Record */}
      <section id="track" className="py-5 text-center">
        <div className="container">
          <h2 className="mb-5" data-aos="fade-up">
            Track Record
          </h2>
          <div className="row justify-content-center">
            {[
              {
                img: contigo,
                financingType: "Emisión de Deuda Pública",
                amount: "$600 Millones MXN",
                year: "2020",
                role: "Asesor, Agente Estructurador & Colocador",
              },
              {
                img: elektra,
                financingType: "Emisión de Deuda Pública",
                amount: "$7,200 Millones MXN",
                year: "2022",
                role: "Asesor, Agente Estructurador & Colocador",
              },
              {
                img: dila,
                financingType: "Capital Privado",
                amount: "$1,500 Millones MXN",
                year: "2022",
                role: "Asesor, Agente Estructurador & Colocador",
              },
              {
                img: totalplay,
                financingType: "Deuda Pública",
                amount: "$1,300 Millones MXN",
                year: "2023",
                role: "Asesor, Agente Estructurador & Agente Colocador",
              },
              {
                img: fortem,
                financingType: "Estructura Deuda Privada",
                amount: "$700 Millones MXN",
                year: "2023",
                role: "Asesor, Agente Estructurador & Colocador",
              },
              {
                img: mac,
                financingType: "Línea de Crédito",
                amount: "$5,000 Millones MXN",
                year: "2024",
                role: "Asesor, Agente Estructurador & Colocador",
              },
            ].map((transaction, index) => (
              <div
                className="col-md-4 mx-3 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="track-card p-4">
                  <img
                    src={transaction.img}
                    alt={transaction.financingType}
                    className="img-fluid track-logo mb-3"
                  />
                  <h5 className="track-financing-type">
                    {transaction.financingType}
                  </h5>
                  <p className="track-amount">{transaction.amount}</p>
                  <p className="track-year">Año: {transaction.year}</p>
                  <p className="track-role">{transaction.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section en otro view */}

      {/*  Testimonials  */}
      <section
        id="testimonials"
        className="py-5 bg-dark text-white text-center"
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="mb-4">Testimonios</h2>
          <div className="row">
            {[
              {
                quote:
                  "MXC Capital me ayudó a llevar mi empresa al siguiente nivel.",
                name: "Miguel Sánchez Navarro - Fortem Capital",
              },
              {
                quote:
                  "La atención al cliente y los resultados fueron excepcionales.",
                name: "Esteban Galindez - Elektra",
              },
            ].map((testimonial, index) => (
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Sin retrasos excesivos
                key={index}
              >
                <blockquote className="blockquote">
                  <p>"{testimonial.quote}"</p>
                  <footer className="blockquote-footer">
                    {testimonial.name}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Columnas */}
      {/* Sección Columnas */}
      <section id="columns" className="py-5 text-center" data-aos="fade-up">
        <div className="container expanded-section">
          <h2 className="mb-5">Explora Más</h2>
          <h3 className="mb-5">
            Conoce los productos en los que MXC se especializa
          </h3>
          <div className="row justify-content-center">
            {[
              {
                title: "Capital Privado & CERPIS",
                icon: "fas fa-chart-line",
                details:
                  "Exploramos estructuras de capital privado para maximizar oportunidades de inversión y desarrollo.",
              },
              {
                title: "Deuda Estructurada",
                icon: "fas fa-users",
                details:
                  "Creamos soluciones personalizadas de deuda estructurada para proyectos a gran escala.",
              },
              {
                title: "Bursatilizaciones de Cartera",
                icon: "fas fa-briefcase",
                details:
                  "Optimizamos activos mediante procesos transparentes y estructurados para garantizar eficiencia.",
              },
              {
                title: "IPOs a través de BMV",
                icon: "fas fa-cogs",
                details:
                  "Facilitamos el acceso al mercado público a través de IPOs diseñadas estratégicamente con Inversionistas Institucionales.",
              },
              {
                title: "Deuda Quirografaría",
                icon: "fas fa-globe",
                details:
                  "Diseñamos soluciones de deuda quirografaria adaptadas a las necesidades específicas de nuestros clientes.",
              },
            ].map((item, index) => (
              <div
                className="col-md-4 mx-3 mb-4 column-card-container"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Configuración consistente
                key={index}
              >
                <div className="column-card p-4">
                  <i className={`${item.icon} fa-3x mb-3`}></i>
                  <h5 className="card-title">{item.title}</h5>
                  <div className="expanded-content">
                    <p>{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Oferta de Valor */}

      {/* Footer */}
      <footer className="footer-section text-white">
        <div className="container">
          {/* Logotipo */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-4 text-center">
              <img
                src={logoMxcBlanco}
                alt="Logotipo de MXC Capital"
                className="footer-logo"
              />
            </div>
          </div>

          {/* Información Principal */}
          <div className="row">
            {/* Contacto */}
            <div className="col-md-3">
              <h5>Contacto</h5>
              <p>Tel: +52 123 456 7890</p>
              <p>Email: contacto@mxccapital.com.mx</p>
              <p></p>
              <p>Dirección:</p>
              <p>
                Torre Esmeralda III, Ferrocarril de Cuernavaca, Ciudad de
                México.
              </p>
            </div>

            {/* Enlaces */}
            <div className="col-md-3">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#pimx" className="text-white text-decoration-none">
                    Acerca de PiMX
                  </a>
                </li>
                <li>
                  <a href="#equipo" className="text-white text-decoration-none">
                    Equipo
                  </a>
                </li>
                <li>
                  <a href="#track" className="text-white text-decoration-none">
                    Track Record
                  </a>
                </li>
              </ul>
            </div>

            {/* Alianzas */}
            <div className="col-md-3">
              <h5>Alianzas</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.pimx.com.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    PiMX Fondo de Deuda
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.crowdlink.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Crowdlink
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.soporteimpulsa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Soporte Impulsa
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vepormas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    VePorMás
                  </a>
                </li>
              </ul>
            </div>

            {/* Síguenos */}
            <div className="col-md-3">
              <h5>Síguenos</h5>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Derechos Reservados */}
          <div className="row mt-4">
            <div className="col text-center">
              <p className="small">
                © 2025 MXC Capital. Todos los derechos reservados.
              </p>
            </div>
          </div>

          {/* Línea Inferior */}
          <div className="footer-bottom text-center mt-3">
            <hr className="footer-line" />
            <p className="footer-emoji">
              Desarrollado por{" "}
              <a
                href="https://www.linkedin.com/in/luis-armando-alvarez-zapfe-201217137/?originalSubdomain=mx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4facfe", textDecoration: "none" }}
              >
                Luis Armando Alvarez Zapfe
              </a>{" "}
              con{"  "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4facfe", textDecoration: "none" }}
              >
                React.js
              </a>{" "}
              <i className="fab fa-react"></i>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
