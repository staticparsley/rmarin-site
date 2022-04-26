import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ruben Marin', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Ruben Marin\'s Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ruben Marin',
  subtitle: 'Im a Software Engineer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'head.jpg',
  paragraphOne: 'I\'m a software engineer based out of NYC. Orignally from Los Angeles, I moved out to the East Coast in pursuit of a better life and enter the tech industry. I started coding in 2012 when I took my first C++ class out of curiosity. I fell in love and switched majors from Music to Computer Science.',
  paragraphTwo: 'I am passionate about tech and am constantly learning about the latest trends and technologies. I consider myself a NodeJS and Python specialist but am currently learning Rust.',
  paragraphThree: 'When I\'m not staring at code I can be found lifting weights, playing guitar, or training Brazillian Jiu-Jitsu.',
  resume: 'https://rmarin-site-assets.s3.amazonaws.com/RMarin_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: 'Web Application Developer @ Fox ',
    info: 'November 2019 - Present',
    info2: 'Technologies Used: NodeJS, AWS, Serverless, Vue, PHP, DynamoDB',
    url: '',
  },
  {
    id: nanoid(),
    img: '',
    title: 'Backend Software Engineer @ Convene',
    info: 'June 2021 - March 2022',
    info2: 'Technologies Used: NodeJS, AWS, React, Wordpress, PHP, PostgreSQL, Python',
    url: '',
  },
  {
    id: nanoid(),
    img: '',
    title: 'Full Stack Developer @ Tendigi',
    info: 'October 2018 - Auguest 2019',
    info2: 'Technologies Used: NodeJS, Heroku, Hapi, GraphQL, React, MongoDB',
    url: '',
  },
];

export const educationData = [
{
  id: nanoid(),
  img: '',
  title: 'M.S. in Computer Science',
  info: 'Arizona State University',
  info2: 'Expected Graduation December 2023',
},
{
  id: nanoid(),
  img: '',
  title: 'B.S. in Computer Science',
  info: 'California State University, Long Beach',
  info2: 'Graduated May 2018',
},
]

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working with me? You can view my resume below.',
  btn: 'Resume',
  resume: 'https://rmarin-site-assets.s3.amazonaws.com/RMarin_Resume.pdf',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/staticparsley',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rubenlmarin/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/staticparsley',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/staticparsley',
    },
  ],
};