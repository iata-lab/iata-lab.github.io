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
import { frontendProjects, dataScienceProjects } from "../data/projectsData";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const gisExperience = [
    {
      period: "Freelancer, GIS Consultant (2021–Present)",
      description: [
        "Conducted spatial and environmental analysis using GIS, remote sensing, and Python-based tools.",
        "Built dashboards (Power BI, Streamlit) to visualize geospatial and statistical insights.",
        "Automated data workflows and implemented ETL processes for analysis and reporting.",
        "Explored data science techniques in academic and personal projects.",
        "Collaborated with clients to deliver geospatial solutions for various projects.",
      ],
    },
    {
      period:
        "GIS Expert & Manager, General Governor's Office of Isfahan Province – National Divisions Group (2014–2021)",
      description: [
        "Led the development of crisis response and land management maps to support provincial decision-making.",
        "Managed and analyzed geospatial datasets to inform regional planning and territorial development.",
        "Coordinated GIS workflows and mentored junior staff on geospatial technologies and methodologies.",
      ],
    },
    {
      period:
        "GIS Expert, Isfahan Provincial Planning & Management Organization – Population Census, Statistics, and Land Use Planning (2004–2014)",
      description: [
        "Designed and updated census cartography and land use maps in collaboration with national planning authorities.",
        "Conducted spatial data integration and analysis to support urban and regional planning strategies.",
        "Provided technical GIS support across departments to improve data-driven decision-making.",
      ],
    },
    {
      period:
        "Part-time Contributor, S4 (Spatial Structures in the Social Sciences), Department of Sociology, Brown University, USA (Feb–Aug 2013)",
      description: [
        "Digitized and georeferenced historical census maps (1890–1930) of major US cities to enable spatio-temporal social science research.",
      ],
    },
    {
      period:
        "GIS Consultant, Spadana Geo Science & Technology Company (2004–2021)",
      description: [
        "Advised on urban GIS planning and implementation projects for municipalities and private sector clients.",
        "Contributed to smart city initiatives and geospatial database design for infrastructure planning.",
      ],
    },
    {
      period:
        "GIS Consultant, Zistban Company, Isfahan Science and Technology Town (2002–2004)",
      description: [
        "Provided consultancy on GIS-related matters for various regional projects",
        "Collaborated with the Isfahan Regional Water Authority on spatial planning and hydrological mapping projects.",
      ],
    },
    {
      period:
        "GIS Project Collaborator, Isfahan University of Technology (2002–2003)",
      description: [
        "Assisted in the initiation of the Isfahan Province GIS project.",
        "Contributed to the zero-phase feasibility studies under the supervision of the Isfahan Provincial Management and Planning Organization.",
      ],
    },
  ];

  const teachingExperience = [
    {
      institution:
        "Municipalities Isfahan's University of Applied Sciences (2009 - 2021)",
      description:
        "Taught undergraduate students in urban planning the fundamentals of urban databases and relevant computer applications.", // Added a brief description
      courses: ["Urban Databases", "Computer Applications in Urban Planning"],
    },
    {
      institution:
        "Red Crescent University of Applied Sciences - Isfahan branch (2014 - 2021)",
      description:
        "Instructed students on the principles of natural disaster management and the crucial role of Disaster Information Management (DIM).", // Added a brief description
      courses: [
        "Management of Natural Disasters",
        "Disaster Information Management (DIM)",
      ],
    },
    {
      institution:
        "Meteorology and Atmospheric Sciences, University of Applied Science (2010 - 2013)",
      description:
        "Provided specialized instruction in Satellite Meteorology to students in atmospheric sciences.", // Added a brief description
      courses: ["Satellite Meteorology"],
    },
    {
      institution: "DaneshPajoohan Institute of Higher Education (2010 - 2012)",
      description:
        "Guided students in GIS principles, digital mapping techniques using AutoCAD, and supervised BSc theses in related fields.", // Added a brief description
      courses: [
        "GIS",
        "Digital Mapping & AutoCAD (DIM)",
        "BSc Thesis Supervision",
      ],
    },
    {
      institution: "Various Organizations",
      description:
        "Conducted introductory and advanced GIS and Remote Sensing training for professionals and educators across different organizations.", // Added a broader description
      courses: [
        "Elementary GIS Course for Technical Experts (Isfahan Province Governorship & Municipality)",
        "GIS and ArcGIS Software Training for Municipal Personnel and Affiliated Organizations",
        "GIS and Remote Sensing (RS) Workshops for Geography Educators",
      ],
    },
  ];

  const publications = {
    english: [
      {
        title:
          "Parking Site Selection Management Using Fuzzy Logic and Multicriteria Decision Making",
        authors: "Farzanmanesh F, Ghaziaskari Naeini A, Makmom Abdullah A.",
        journal: "EnviromentAsia, Vol.3 (Special issue), 2010, pp.109-116",
        link: "https://www.researchgate.net/publication/283871418_Parking_site_selection_management_using_Fuzzy_logic_and_Multi_Criteria_Decision_Making",
      },
    ],
    persian: [
      {
        title:
          "Evaluation of different methods in construction management of public parking in the commercial center of the Isfahan city by using GIS",
        authors: "Ghanbari, S., Ghaziaskari Naeini, A.",
        journal:
          "Journal of Geography and Environmental Planning, University of Isfahan, Vol.22, No.44, 2011, pp.183-198",
      },
      {
        title:
          "Spatial analysis of urban green space with Geographic Information System",
        authors: "Zare, R., Ghaziaskari Naeini, A.",
        journal:
          "1st National Conference of Sustainable Development and Urban Development, Isfahan-Iran, November, 2011",
      },
      {
        title:
          "Using multi-criteria decision-making models and fuzzy logic for locating urban public Service",
        authors: "Ghaziaskari Naeini, A., varshosaz, M.",
        journal:
          "1st National Conference of Sustainable Development and Urban Development, Isfahan-Iran, November, 2011",
      },
      {
        title:
          "Using multi-criteria decision-making models and fuzzy logic in the management of site selection of public services in urban",
        authors: "Ghaziaskari Naeini, A., varshosaz, M",
        journal:
          "16th Geomatics Conference, Tehran, National Cartographic Centre (NCC) of Iran, 9-10 May, 2009",
      },
      {
        title:
          "Appropriate method for site selection of public parking lots by using GIS",
        authors: "Ghaziaskari Naeini, A., Varshosaz, M.",
        journal:
          "11th Geomatics Conference, Tehran, National Cartographic Centre (NCC) of Iran, 5-7 May 2004",
      },
    ],
  };

  const honors = [
    {
      honor: "Acceso al Máster Beint y rendimiento académico durante el Máster",
      details: "Clasificado en el puesto 21 de entre 600 aspirantes.",
    },
    {
      honor: "Aprobar el proceso de concurso-oposición en dos ocasiones",
      details:
        "Calificaciones de 7.13 y 5.35 en dos exámenes finales de dos convocatorias para Diplomado Estadístico del Estado, pero sin obtener plaza.",
    },
  ];

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
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
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
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
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
            <div key={index} className="experience-item">
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
            <div key={index} className="teaching-item">
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

      <article className="publications-section">
        <h2 className="category-title">
          <FaBook />
          Publications
        </h2>
        <div className="publications-list">
          <div className="publications-item">
            <h3>English</h3>
            <ul>
              {publications.english.map((pub, index) => (
                <li key={index}>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                  , {pub.authors} <em>{pub.journal}</em>
                </li>
              ))}
            </ul>
          </div>
          <div className="publications-item">
            <h3>Persian</h3>
            <ul>
              {publications.persian.map((pub, index) => (
                <li key={index}>
                  {pub.title}, {pub.authors} <em>{pub.journal}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
