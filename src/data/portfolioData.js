// All personal, resume-derived content lives here, separate from UI components.
// Every value below is taken directly from Bibin's resume — nothing invented.

import kaarvi1 from '../assets/projects/kaarvi-1.jpg'
import kaarvi2 from '../assets/projects/kaarvi-2.jpg'
import petcare1 from '../assets/projects/petcare-1.jpg'
import petcare2 from '../assets/projects/petcare-2.jpg'

export const personalInfo = {
  name: 'Bibin K U',
  role: 'Software Developer',
  roleLong: 'Software Developer / Full Stack Web Developer',
  location: 'Kerala, India',
  email: 'bibinku01@gmail.com',
  phone: '+91 8078164113',
  linkedin: 'https://www.linkedin.com/in/bibin-k-u-2859852b4',
  github: 'https://github.com/Bibinku',
  tagline: 'I build practical web applications using Python, Django, JavaScript, and modern web technologies.',
  summary:
    'Software Developer Intern with hands-on experience in Python, Django, HTML, CSS, JavaScript, and MySQL. Looking to build real-world applications, contribute to a development team, and grow as a Full Stack Developer.',
}

export const aboutPoints = [
  {
    title: 'Backend-leaning full stack',
    text: 'Hands-on experience with Django, MySQL, and building backend functionality.',
  },
  {
    title: 'Comfortable on the frontend too',
    text: 'Experience with HTML, CSS, JavaScript, and basic React development.',
  },
  {
    title: 'Experience',
    text: 'Completed an internship at Luminar Technolab, gaining practical web development experience.',
  },
  ,
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React (basics)'],
  },
  {
    label: 'Backend',
    skills: ['Python', 'Django', 'Django REST Framework'],
  },
  {
    label: 'Database',
    skills: ['MySQL', 'SQLite'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub'],
  },
]

export const experience = [
  {
    role: 'Web Development Intern',
    company: 'Luminar Technolab',
    location: 'Kochi, Kerala',
    period: 'Jan 2024 \u2014 Nov 2024',
    points: [
      'Built web applications using Python and Django.',
      'Worked across frontend and backend using HTML, CSS and JavaScript.',
      'Used MySQL for database design and day-to-day data operations.',
      'Practiced version control with Git as part of a regular workflow.',
    ],
  },
]

export const projects = [
  {
    name: 'Kaarvi Enterprises',
    subtitle: 'Web app for paying guest accommodation',
    description:
      'A responsive web application for listing and managing PG (paying guest) rooms, built end to end and deployed for live use.',
    features: [
      'Managed PG room listings and accommodation details.',
      'Admin dashboard with full CRUD operations',
      'Live deployment handling real user interaction',
    ],
    tech: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://kaarvienterprises.com/',
    codeUrl: null,
    images: [
      { src: kaarvi1, alt: 'Kaarvi Enterprises homepage hero section' },
      { src: kaarvi2, alt: 'Kaarvi Enterprises homepage, second slide' },
    ],
  },
  {
    name: 'PetCare',
    subtitle: 'Web application for pet stores',
    description:
      'A web platform built to help pet stores manage their products, services, and customer data through dedicated admin and customer-facing modules.',
    features: [
      'Managed products and services for pet stores.',
      'Customer data handling in a dedicated module',
      'Separate admin and customer-facing views',
    ],
    tech: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: null,
    codeUrl: 'https://github.com/Bibinku/bowsnmoews',
    images: [
      { src: petcare1, alt: 'PetCare storefront homepage' },
      { src: petcare2, alt: 'PetCare product details page' },
    ],
  },
]

export const education = [
  {
    degree: 'MCA \u2014 Full Stack Development',
    institution: 'JAIN (Deemed-to-be University)',
    period: 'Present',
  },
  {
    degree: 'BSc Mathematics',
    institution: 'University of Kerala',
    period: '2023',
  },
]

export const certifications = [
  {
    title: 'Python \u2014 Web Development Expert',
    issuer: 'National Council for Technology and Training (NACTET)',
    year: '2024',
  },
  {
    title: 'Python Django \u2014 React \u2014 Full Stack Web Development Expert',
    issuer: 'Luminar Technolab Software Training Institute',
    year: '2024',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
