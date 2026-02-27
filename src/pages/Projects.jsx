import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaDatabase,
  FaMapMarkedAlt,
  FaGraduationCap,
  FaBook,
  FaTrophy,
} from "react-icons/fa";
import {
  frontendProjects,
  dataScienceProjects,
  gisExperience,
  teachingExperience,
  studies,
  honors,
} from "../data/projectsData";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  // `publications` and `honors` are centralized in `projectsData.js`

  return (
    <section className="projects-section">
      <h1 className="section-title">Projects</h1>

      <article>
        <h2 className="category-title">
          <FaCode />
          Front-end and Related Projects
        </h2>
        <div className="projects-grid">
          {frontendProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image-container">
                {project.images && project.images.length > 0 && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.year && <p className="project-year">{project.year}</p>}
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article>
        <h2 className="category-title">
          <FaDatabase />
          Data Science and Related Projects
        </h2>
        <div className="projects-grid">
          {dataScienceProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image-container">
                {project.images && project.images.length > 0 && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.year && <p className="project-year">{project.year}</p>}
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="experience-section">
        <h2 className="category-title">
          <FaMapMarkedAlt />
          GIS and Remote Sensing Projects
        </h2>
        <div className="experience-list">
          {gisExperience.map((exp, index) => (
            <div
              key={index}
              className="experience-item"
              onClick={() => navigate(`/experience/gis/${exp.id}`)}
              style={{ cursor: "pointer" }}
            >
              <h3>{exp.period}</h3>
              <ul>
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="teaching-section">
        <h2 className="category-title">
          <FaGraduationCap />
          Teaching
        </h2>
        <div className="teaching-list">
          {teachingExperience.map((exp, index) => (
            <div
              key={index}
              className="teaching-item"
              onClick={() => navigate(`/experience/teaching/${exp.id}`)}
              style={{ cursor: "pointer" }}
            >
              <h3>{exp.institution}</h3>
              <p>{exp.description}</p>
              <ul>
                {exp.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="studies-section">
        <h2 className="category-title">
          <FaBook />
          Studies & Qualifications
        </h2>
        <ul className="honors-list">
          {studies.map((s, i) => (
            <li key={i} className="honors-item">
              <h3>{s.degree}</h3>
              <p>{s.university}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className="honors-section">
        <h2 className="category-title">
          <FaTrophy />
          Honors and Awards
        </h2>
        <ul className="honors-list">
          {honors.map((honor, index) => (
            <li key={index} className="honors-item">
              <h3>{honor.honor}</h3>
              <p>{honor.details}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Projects;
