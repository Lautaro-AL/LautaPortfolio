import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "p3-api",
    title: "Sistema de Gestión de Envíos — API",
    description: {
      es: "API REST para un sistema de gestión logística de envíos, construida con .NET 8 aplicando Clean Architecture estricta: separación en capas Domain, Application, Infrastructure y Presentation. Incluye autenticación, manejo de pedidos y seguimiento de estados.",
      en: "REST API for a logistics shipment management system, built with .NET 8 using strict Clean Architecture: Domain, Application, Infrastructure, and Presentation layers. Includes authentication, order management, and status tracking.",
    },
    stack: [".NET 8", "C#", "Clean Architecture", "SQL Server", "REST API", "JWT"],
    githubUrl: "https://github.com/Lautaro-AL/Proyecto-P3APIAdmin",
    featured: true,
    date: "Mar 2025",
    highlight: {
      es: "Implementé Clean Architecture separando responsabilidades en 4 capas independientes, lo que permitió testear la lógica de negocio sin dependencias de infraestructura.",
      en: "Implemented Clean Architecture with 4 independent layers, enabling business logic testing without infrastructure dependencies.",
    },
  },
  {
    id: "huellas",
    title: "HUELLAS — Gestión Veterinaria",
    description: {
      es: "Sistema web de gestión veterinaria desarrollado en equipo usando Scrum. Permite administrar turnos, historiales clínicos y pacientes. Diseño responsive y cobertura de tests unitarios con Jest.",
      en: "Veterinary management web system developed as a team using Scrum. Handles appointment scheduling, clinical records, and patient management. Responsive design with Jest unit test coverage.",
    },
    stack: ["JavaScript", "HTML", "CSS", "Jest", "Scrum"],
    githubUrl: "https://github.com/EmilianoMandacen/TallerDesarrolloSoftHUELLAS",
    featured: true,
    date: "Mar 2026",
    highlight: {
      es: "Trabajé en equipo real con Scrum: sprints, backlog y ceremonias. Incorporé Jest para pruebas unitarias asegurando la lógica de negocio crítica.",
      en: "Worked in a real Scrum team with sprints, backlog, and ceremonies. Integrated Jest unit tests to cover critical business logic.",
    },
  },
  {
    id: "obligatorio2-front",
    title: "Full Stack — Frontend",
    description: {
      es: "SPA construida como frontend del sistema Full Stack del segundo obligatorio. Consume la API REST del backend, implementa rutas dinámicas, manejo de estado y autenticación por token.",
      en: "SPA built as the frontend for the second obligatory Full Stack system. Consumes the REST API backend, with dynamic routing, state management, and token-based authentication.",
    },
    stack: ["Vue.js", "JavaScript", "HTML/CSS", "REST API"],
    githubUrl: "https://github.com/Lautaro-AL/Obligatorio2-DesarrolloFullstack-front-",
    featured: true,
    date: "Oct 2025",
    highlight: {
      es: "Diseñé la arquitectura del frontend desacoplada del backend, comunicándome solo a través de contratos HTTP definidos en Swagger.",
      en: "Designed the frontend architecture fully decoupled from the backend, communicating only through HTTP contracts defined in Swagger.",
    },
  },
  {
    id: "p3-cliente",
    title: "Sistema de Gestión de Envíos — Cliente",
    description: {
      es: "Frontend del sistema de gestión de envíos P3. Interfaz para que los clientes consulten el estado de sus pedidos e interactúen con la API admin.",
      en: "Frontend for the P3 shipment management system. Interface for customers to check order status and interact with the admin API.",
    },
    stack: [".NET 8", "C#", "MVC", "SQL Server"],
    githubUrl: "https://github.com/Lautaro-AL/Proyecto-P3Cliente",
    featured: false,
    date: "Mar 2025",
    highlight: {
      es: "Aplicación MVC que consume la API Admin, separando responsabilidades entre cliente y administración.",
      en: "MVC application consuming the Admin API, separating responsibilities between client and admin views.",
    },
  },
  {
    id: "obligatorio1-api",
    title: "Full Stack — API REST",
    description: {
      es: "Backend del primer obligatorio Full Stack. API REST construida con Node.js y Express, base de datos NoSQL con MongoDB, autenticación JWT y documentación con Swagger.",
      en: "Backend for the first obligatory Full Stack project. REST API built with Node.js and Express, NoSQL database with MongoDB, JWT authentication, and Swagger documentation.",
    },
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubUrl: "https://github.com/Lautaro-AL/Obligatorio1-DesarrolloFullstack",
    featured: false,
    date: "Oct 2025",
    highlight: {
      es: "Diseñé la API siguiendo REST estricto con documentación en Swagger, facilitando la integración del frontend.",
      en: "Designed the API following strict REST principles with Swagger documentation, simplifying frontend integration.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const extraProjects = projects.filter((p) => !p.featured);
