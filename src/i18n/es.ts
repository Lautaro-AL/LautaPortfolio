export const es = {
  nav: {
    work: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    about: 'Sobre mí',
    education: 'Formación',
    contact: 'Contacto',
  },
  cv: 'Descargar CV',
  hero: {
    roles: [
      'Desarrollador Full Stack',
      'Programador Web',
      'Backend Developer',
    ],
    description:
      'Programador Web graduado de ORT Uruguay, cursando el último semestre de Analista en Tecnologías de la Información. Con 2 años de proyectos Full Stack en .NET, Node.js y Java — y una web de autos eléctricos en producción.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contacto',
    availability: 'Disponible para trabajar',
    location: 'Montevideo, Uruguay',
  },
  work: {
    title: 'Experiencia',
    subtitle: 'Trabajo real, en producción',
    production: 'En producción',
    visit: 'Ver el sitio',
    webRepo: 'Web repo',
    apiRepo: 'API repo',
    description:
      'Web de autos eléctricos para el mercado uruguayo, hoy online en routeev.uy. Catálogo, consultas y contenido pensados para actualizarse sin tocar código.',
    role: 'Mi rol: diseñé la API y trabajé el frontend, definiendo los contratos HTTP entre ambos y el deploy del proyecto.',
    highlightLabel: 'Decisión técnica',
    highlight:
      'Separé la API del frontend desde el día uno: el sitio consume contratos HTTP estables, así el catálogo puede crecer sin rediseñar la interfaz.',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy Programador Web graduado de la Universidad ORT Uruguay, actualmente cursando el último semestre de Analista en Tecnologías de la Información. Cuento con formación sólida en desarrollo Full Stack, arquitecturas limpias y metodologías ágiles.',
      'A lo largo de 2 años construí proyectos reales en C#/.NET, Java/Spring Boot, Node.js y React/Vue. Cada proyecto sumó una capa de complejidad: de MVC básico a Clean Architecture, de SQL a NoSQL, de HTML vanilla a frameworks modernos.',
      'Con RouteEV di el paso que más me enseñó: sacar algo a producción y mantenerlo. Busco mi primera experiencia laboral donde pueda contribuir desde el día uno y seguir creciendo en un equipo que priorice las buenas prácticas.',
    ],
    stats: [
      ['6', 'Proyectos'],
      ['1', 'En producción'],
      ['ORT Uruguay', 'Universidad'],
    ] as [string, string][],
    downloadCV: 'Descargar CV',
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Tecnologías con las que trabajo',
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Selección de proyectos destacados',
    viewCode: 'Ver código',
    viewDemo: 'Ver demo',
    viewAll: 'Ver todos los proyectos',
    hideAll: 'Ver menos',
    highlight: 'Decisión técnica',
  },
  education: {
    title: 'Formación',
    current: 'En curso',
  },
  contact: {
    title: '¿Hablamos?',
    description:
      'Estoy buscando mi primera oportunidad laboral. Si tu empresa necesita un desarrollador comprometido, escribime — respondo en menos de 24 hs.',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu email',
    messagePlaceholder: 'Tu mensaje',
    send: 'Enviar mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado! Te respondo pronto.',
    error: 'Ocurrió un error. Intentá de nuevo.',
    orContact: 'O contactame directamente:',
  },
  footer: {
    by: 'por Lautaro Álvarez',
    rights: 'Todos los derechos reservados.',
  },
};

export type Translations = typeof es;
