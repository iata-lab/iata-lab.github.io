import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <FaExclamationTriangle
        style={{
          fontSize: "3rem",
          color: "var(--secondary-color, #3498db)",
          marginBottom: "1rem",
        }}
      />
      <h1
        style={{
          color: "var(--primary-color, #2c3e50)",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        404 — Página no encontrada
      </h1>
      <p
        style={{
          color: "var(--text-color, #333)",
          marginBottom: "2rem",
          lineHeight: "1.6",
        }}
      >
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.8rem 1.5rem",
          backgroundColor: "var(--primary-color, #2c3e50)",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
          transition: "background-color 0.2s ease",
        }}
      >
        <FaHome />
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
