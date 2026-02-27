import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { allProjects } from "../data/projectsData";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects[id];

  if (!project) {
    return (
      <section className="project-detail-page">
        <div className="back-button-container">
          <Link to="/projects" className="back-button">
            <FaArrowLeft /> Volver a Proyectos
          </Link>
        </div>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Proyecto no encontrado</h2>
          <p>Lo sentimos, el proyecto que buscas no existe.</p>
        </div>
      </section>
    );
  }

  const { title, year, description, images, details } = project;

  return (
    <section className="project-detail-page">
      <div className="back-button-container">
        <Link to="/projects" className="back-button">
          <FaArrowLeft /> Volver a Proyectos
        </Link>
      </div>

      <div className="project-detail-content">
        <div className="project-detail-header">
          <h1>{title}</h1>
          {year && <p className="project-detail-year">{year}</p>}
        </div>

        {images && images.length > 0 && (
          <div className="project-detail-images">
            <img
              src={images[0]}
              alt={title}
              className="project-detail-main-image"
            />
          </div>
        )}

        <div className="project-detail-description">
          <p>{description}</p>
        </div>

        {details && (
          <div className="project-detail-extras">
            {details.technologies && details.technologies.length > 0 && (
              <div className="detail-section">
                <h2>Tecnologías</h2>
                <ul>
                  {details.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.features && details.features.length > 0 && (
              <div className="detail-section">
                <h2>Características</h2>
                <ul>
                  {details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.responsibilities && details.responsibilities.length > 0 && (
              <div className="detail-section">
                <h2>Responsabilidades</h2>
                <ul>
                  {details.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.skills && details.skills.length > 0 && (
              <div className="detail-section">
                <h2>Habilidades</h2>
                <ul>
                  {details.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
