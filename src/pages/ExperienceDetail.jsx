import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { gisExperience, teachingExperience } from "../data/projectsData";
import "./ProjectDetailExample.css";

const ExperienceDetail = () => {
  const { type, experienceId } = useParams();

  // Determine which data source to use based on URL type
  const dataSource = type === "teaching" ? teachingExperience : gisExperience;
  const experience = dataSource.find((exp) => exp.id === experienceId);

  if (!experience) {
    return (
      <section className="project-detail-page">
        <div className="back-button-container">
          <Link to="/projects" className="back-button">
            <FaArrowLeft /> Volver a Proyectos
          </Link>
        </div>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Experiencia no encontrada</h2>
          <p>Lo sentimos, la experiencia que buscas no existe.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-page">
      {/* Botón para volver */}
      <div className="back-button-container">
        <Link to="/projects" className="back-button">
          <FaArrowLeft /> Volver a Proyectos
        </Link>
      </div>

      {/* Contenido de la experiencia */}
      <div className="experience-detail-content">
        <div className="experience-header">
          {/* For GIS experiences: show period, for Teaching: show institution */}
          <h1>{experience.period || experience.institution}</h1>
        </div>

        {/* For Teaching experiences: show description and courses */}
        {experience.institution && experience.courses && (
          <div className="teaching-details">
            <p className="description">{experience.description}</p>
            <div className="courses-section">
              <h2>Cursos Impartidos:</h2>
              <ul>
                {experience.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* For GIS experiences: show description list */}
        {experience.description && Array.isArray(experience.description) && (
          <div className="experience-description">
            <h2>Responsabilidades y Logros</h2>
            <ul>
              {experience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceDetail;
