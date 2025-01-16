import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/contact.css";
import axios from "axios";
import { Link } from "react-router-dom";

// Importar la imagen
import logoMxcBlanco from "./assets/images/logomxc-blanco.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    empresa: "",
    rfc: "",
    busco: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/send-email`,
        formData
      );
      alert("¡Solicitud enviada correctamente!");
      setFormData({
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        empresa: "",
        rfc: "",
        busco: "",
      });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      alert("Hubo un error al enviar la solicitud.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <img
            src={logoMxcBlanco}
            alt="Logotipo de MXC Capital"
            className="logo-small"
          />
          <Link to="/" className="navbar-brand"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="contact-section d-flex justify-content-center align-items-center">
        <div className="contact-form">
          <h2>Contáctanos</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Apellido Paterno</label>
              <input
                type="text"
                name="apellidoPaterno"
                className="form-control"
                placeholder="Apellido Paterno"
                value={formData.apellidoPaterno}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Apellido Materno</label>
              <input
                type="text"
                name="apellidoMaterno"
                className="form-control"
                placeholder="Apellido Materno"
                value={formData.apellidoMaterno}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Nombre de Empresa</label>
              <input
                type="text"
                name="empresa"
                className="form-control"
                placeholder="Nombre de Empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>RFC</label>
              <input
                type="text"
                name="rfc"
                className="form-control"
                placeholder="RFC"
                value={formData.rfc}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Busco</label>
              <select
                name="busco"
                className="form-select"
                value={formData.busco}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Capital">Capital</option>
                <option value="Deuda">Deuda</option>
                <option value="Emisión Pública">Emisión Pública</option>
              </select>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn-submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p>
            © {new Date().getFullYear()} MXC Capital. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
