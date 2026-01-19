// Import images
import portfolioImg from "../assets/img/portfolio.png";
import weatherMapImg from "../assets/img/weather-map.png";
import espaniolImg from "../assets/img/espaniol.png";
import usaImg from "../assets/img/usa.png";
import foodImg from "../assets/img/food.png";
import forecastImg from "../assets/img/forecast.png";
import hundirImg from "../assets/img/hundir.png";
import universityImg from "../assets/img/university.png";
import airImg from "../assets/img/air.png";
import desertImg from "../assets/img/desert.png";
import ekhilurImg from "../assets/img/ekhilur.svg";
import countryImg from "../assets/img/country.png";

export const allProjects = {
  "asistente-director": {
    id: "asistente-director",
    title: "Asistente Dirección",
    description:
      "Realicé gestiones diarias en empresa unipersonal de distribución de productos químicos y de laboratorio para empresas industriales (emisión y envío de facturas, trato directo con clientes y proveedores, fiscalidad). Ayuda en la búsqueda de subvenciones para el traspaso del negocio.",
    images: [countryImg],
    details: {
      responsibilities: [
        "Emisión y envío de facturas a clientes",
        "Trato directo con clientes y proveedores",
        "Gestión de fiscalidad empresarial",
        "Coordinación de operaciones diarias",
        "Búsqueda y gestión de subvenciones para traspaso de negocio",
      ],
      skills: [
        "Gestión administrativa y fiscal",
        "Comunicación B2B",
        "Atención al cliente",
        "Gestión de relaciones con proveedores",
        "Conocimiento en el sector químico y de laboratorio",
      ],
    },
  },
  "weather-map": {
    id: "weather-map",
    title: "Weather Map of Bizkaia (OpenWeatherMap & Leaflet.js)",
    description:
      "Una aplicación web que visualiza datos meteorológicos en tiempo real para Bizkaia, combinando la API de OpenWeatherMap con mapas interactivos de Leaflet.js. Este proyecto demuestra la integración de múltiples tecnologías para crear una experiencia visual enriquecida, permitiendo a los usuarios explorar patrones climáticos sobre un mapa interactivo de la región.",
    images: [weatherMapImg, weatherMapImg, weatherMapImg, weatherMapImg],
    details: {
      technologies: [
        "JavaScript (Vanilla)",
        "OpenWeatherMap API",
        "Leaflet.js",
        "HTML & CSS",
      ],
      features: [
        "Visualización de datos meteorológicos en tiempo real",
        "Mapa interactivo de Bizkaia",
        "Información detallada por ubicación",
        "Interfaz responsiva",
      ],
    },
  },
  "food-seeker": {
    id: "food-seeker",
    title:
      "Food Seeker: Explore Nutritional Information (Buscador de Alimentos)",
    description:
      "Descubre y filtra productos alimenticios con esta aplicación web React.js, utilizando la API de OpenFoodFacts. Disfruta de una experiencia visualmente adaptable con temas dinámicos impulsados por variables CSS y un diseño responsivo usando CSS Grid y Flexbox. Las características incluyen ver detalles nutricionales y ambientales, y guardar elementos favoritos.",
    images: [foodImg],
    details: {
      technologies: [
        "React.js",
        "OpenFoodFacts API",
        "CSS Variables",
        "CSS Grid & Flexbox",
      ],
      features: [
        "Búsqueda y filtrado de productos",
        "Información nutricional detallada",
        "Impacto ambiental",
        "Guardado de favoritos",
        "Temas dinámicos",
      ],
    },
  },
  "movies-spanish": {
    id: "movies-spanish",
    title: "Find Your Favorite Movies (Spanish)",
    description:
      "Una aplicación web amigable construida con JavaScript, HTML y CSS que te permite buscar películas fácilmente usando la API de TMDb. Descubre películas con filtros avanzados por fecha de lanzamiento, género, clasificación y certificación de películas españolas. Disfruta de toda la experiencia en español.",
    images: [espaniolImg],
    details: {
      technologies: ["JavaScript", "HTML & CSS", "TMDb API"],
      features: [
        "Búsqueda de películas",
        "Filtros avanzados",
        "Clasificación por género",
        "Interfaz en español",
      ],
    },
  },
  "movies-english": {
    id: "movies-english",
    title: "Find Your Favorite Movies (English)",
    description:
      "Explora y busca películas sin esfuerzo con esta aplicación web (JavaScript, HTML, CSS) impulsada por la API de TMDb. Refina tu búsqueda usando filtros para fecha de lanzamiento, género, clasificación y certificación de películas estadounidenses.",
    images: [usaImg],
    details: {
      technologies: ["JavaScript", "HTML & CSS", "TMDb API"],
      features: [
        "Búsqueda de películas",
        "Filtros avanzados",
        "Clasificación por género",
        "Interfaz en inglés",
      ],
    },
  },
  forecast: {
    id: "forecast",
    title:
      "Basque Country Weather: A Front-End Bootcamp Finale (El Tiempo en Euskadi)",
    description:
      "Desarrollado como el proyecto final de un bootcamp de desarrollo front-end, esta aplicación de pronóstico del tiempo para el País Vasco y algunas ciudades importantes aprovecha JavaScript, React y Vite. El resultado es una interfaz rápida, moderna y fácil de usar diseñada para acceso óptimo a información meteorológica.",
    images: [forecastImg],
    details: {
      technologies: ["React", "Vite", "JavaScript", "Weather API"],
      features: [
        "Pronóstico en tiempo real",
        "Múltiples ciudades",
        "Interfaz responsiva",
        "Rendimiento optimizado",
      ],
    },
  },
  "portfolio-initial": {
    id: "portfolio-initial",
    title: "Personal Portfolio Website (Initial Version)",
    description:
      "Mi primer sitio web de portafolio, construido usando solo HTML y CSS durante un curso de desarrollo web front-end. Este proyecto inicial sirvió como base para mi portafolio actual más desarrollado.",
    images: [portfolioImg],
    details: {
      technologies: ["HTML", "CSS"],
      features: [
        "Diseño responsivo",
        "Estructura semántica",
        "Base para versiones futuras",
      ],
    },
  },
  battleship: {
    id: "battleship",
    title: "Battleship Game in Python (Hundir la flota)",
    description:
      "Desarrollé un juego clásico de Hundir la Flota usando Python, demostrando conceptos fundamentales de programación e implementación de lógica de juego.",
    images: [hundirImg],
    details: {
      technologies: ["Python"],
      features: [
        "Lógica de juego completa",
        "Interfaz interactiva",
        "Mecánicas de juego clásicas",
      ],
    },
  },
  "university-eda": {
    id: "university-eda",
    title: "Analyzing Global University Trends with Python EDA",
    description:
      "Realicé Análisis Exploratorio de Datos (EDA) en el conjunto de datos CWUR usando Python para identificar y analizar patrones de múltiples años y conocimientos clave en rankings universitarios globales.",
    images: [universityImg],
    details: {
      technologies: ["Python", "Pandas", "Matplotlib"],
      features: [
        "Análisis de datos multidimensional",
        "Visualizaciones detalladas",
        "Identificación de patrones",
      ],
    },
  },
  "air-pollution": {
    id: "air-pollution",
    title: "Machine Learning for Iranian Air Pollution Analysis",
    description:
      "Utilicé algoritmos de aprendizaje automático para desarrollar modelos predictivos para analizar y pronosticar tendencias de contaminación del aire en Irán.",
    images: [airImg],
    details: {
      technologies: [
        "Python",
        "Scikit-learn",
        "Machine Learning",
        "Data Analysis",
      ],
      features: [
        "Modelos predictivos",
        "Análisis de series temporales",
        "Visualización de datos",
      ],
    },
  },
  "dessert-prediction": {
    id: "dessert-prediction",
    title: "Dessert Prediction using Machine Learning (Postre)",
    description:
      "Apliqué varias técnicas de aprendizaje automático para construir un modelo capaz de predecir tipos de postres basándose en características de entrada proporcionadas.",
    images: [desertImg],
    details: {
      technologies: ["Python", "Streamlit", "Machine Learning"],
      features: [
        "Modelo de clasificación",
        "Interfaz web interactiva",
        "Predicciones en tiempo real",
      ],
    },
  },
  ekhilur: {
    id: "ekhilur",
    title: "Ekhilur Custom Statistics Platform (Web Scraping Challenge)",
    description:
      "Un desafío de bootcamp que implica el desarrollo de un sitio web con una implementación de web scraping para proporcionar a los usuarios de Ekhilur estadísticas de transacciones personalizadas extraídas directamente de sus cuentas.",
    images: [ekhilurImg],
    details: {
      technologies: ["Web Scraping", "Python", "JavaScript"],
      features: [
        "Web scraping automatizado",
        "Estadísticas personalizadas",
        "Extracción de datos",
      ],
    },
  },
};

export const frontendProjects = [
  allProjects["asistente-director"],
  allProjects["forecast"],
  allProjects["food-seeker"],
  allProjects["movies-spanish"],
  allProjects["movies-english"],
  allProjects["weather-map"],
  allProjects["portfolio-initial"],
];

export const dataScienceProjects = [
  allProjects["battleship"],
  allProjects["university-eda"],
  allProjects["air-pollution"],
  allProjects["dessert-prediction"],
  allProjects["ekhilur"],
];
