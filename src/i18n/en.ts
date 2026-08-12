import type { Translations } from './es';

export const en: Translations = {
  nav: {
    work: 'Work',
    projects: 'Projects',
    skills: 'Skills',
    about: 'About',
    education: 'Education',
    contact: 'Contact',
  },
  cv: 'Download CV',
  hero: {
    roles: [
      'Full Stack Developer',
      'Web Developer',
      'Backend Developer',
    ],
    description:
      'Web Developer graduated from ORT Uruguay, finishing my last semester of Information Technology Analyst. 2 years of Full Stack projects in .NET, Node.js and Java — plus an electric-car site in production.',
    ctaProjects: 'View projects',
    ctaContact: 'Contact',
    availability: 'Open to work',
    location: 'Montevideo, Uruguay',
  },
  work: {
    title: 'Work',
    subtitle: 'Real work, in production',
    production: 'In production',
    visit: 'Visit the site',
    webRepo: 'Web repo',
    apiRepo: 'API repo',
    description:
      'An electric-car site for the Uruguayan market, live today at routeev.uy. Catalog, enquiries and content designed to be updated without touching code.',
    role: 'My role: I designed the API and worked on the frontend, defining the HTTP contracts between them and the project deploy.',
    highlightLabel: 'Technical decision',
    highlight:
      'Split the API from the frontend on day one: the site consumes stable HTTP contracts, so the catalog can grow without redesigning the interface.',
  },
  about: {
    title: 'About me',
    paragraphs: [
      "I'm a Web Developer graduated from Universidad ORT Uruguay, currently finishing my last semester of Information Technology Analyst. I have a solid background in Full Stack development, clean architectures and agile methodologies.",
      'Over 2 years I built real projects in C#/.NET, Java/Spring Boot, Node.js and React/Vue. Each project added complexity: from basic MVC to Clean Architecture, from SQL to NoSQL, from vanilla HTML to modern frameworks.',
      "RouteEV taught me the most: shipping something to production and keeping it there. I'm looking for my first professional experience where I can contribute from day one and keep growing in a team that values good practices.",
    ],
    stats: [
      ['6', 'Projects'],
      ['1', 'In production'],
      ['ORT Uruguay', 'University'],
    ],
    downloadCV: 'Download CV',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies I work with',
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of featured work',
    viewCode: 'View code',
    viewDemo: 'Live demo',
    viewAll: 'View all projects',
    hideAll: 'Show less',
    highlight: 'Technical decision',
  },
  education: {
    title: 'Education',
    current: 'Current',
  },
  contact: {
    title: "Let's talk",
    description:
      "I'm looking for my first professional opportunity. If your company needs a committed developer, reach out — I reply within 24 hours.",
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
    send: 'Send message',
    sending: 'Sending...',
    success: "Message sent! I'll get back to you soon.",
    error: 'An error occurred. Please try again.',
    orContact: 'Or contact me directly:',
  },
  footer: {
    by: 'by Lautaro Álvarez',
    rights: 'All rights reserved.',
  },
};
