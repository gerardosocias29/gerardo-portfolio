const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://gerardosocias29.github.io/gerardo-portfolio',
  title: 'GS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gerardo Socias Jr.',
  role: '<Software / Web Developer>',
  description:
    'Passionate about Web Development, I possess strong analytical and thinking skills, and have a genuine love for coding. I am constantly exploring new technologies and platforms, and I am always eager to learn new things. One of my main goals is to constantly improve my talent and skills in the field of web development.',
  resume: 'https://bit.ly/GerardoResumePdf',
  social: {
    linkedin: 'https://linkedin.com/in/gerardosociasjr',
    github: 'https://github.com/gerardosocias29/',
    facebook: 'https://www.facebook.com/gerardo.gwapo.socias',
  },
}

const projects = [
  {
    name: 'My Portfolio',
    description:
      'My portfolio build with React.',
    stack: [
      {
        name: 'React',
        icon: 'react',
      },
      {
        name: 'Fortawesome',
        icon: 'fortawesome',
      }
    ],
    sourceCode: 'https://github.com/gerardosocias29/gerardo-portfolio',
    livePreview: '/',
  },
  {
    name: 'Gnonymous Chat',
    description:
      'An experimental anonymous chat.',
    stack: [
      {
        name: 'Laravel',
        icon: 'laravel',
      },
      {
        name: 'PHP',
        icon: 'php',
      },
      {
        name: 'JavaScript',
        icon: 'javascript',
      }
    ],
    sourceCode: 'https://github.com/gerardosocias29/gnonymous-chat',
    livePreview: '/',
  }
]

const experiences = [
  {
    name: 'Seditio Asia Inc.',
    position: 'Junior Web Developer',
    year: 'Jan 2022 - Present',
    description: 'Responsible for maintaining and developing additional features on the web systems, database management, and cooperating with web designer to match visual design intent.',
    stack:[
      {
        name: 'HTML',
        icon: 'html5'
      },
      {
        name: 'CSS',
        icon: 'css3-alt'
      },
      {
        name: 'Sass',
        icon: 'sass'
      },
      {
        name: 'JavaScript',
        icon: 'js'
      },
      {
        name: 'PHP',
        icon: 'php'
      },
      {
        name: 'Github',
        icon: 'github'
      },
      {
        name: 'Linux',
        icon: 'linux'
      },
      {
        name: 'Laravel',
        icon: 'laravel'
      },
      {
        name: 'Gulp',
        icon: 'gulp'
      },
    ],
    color: '#1e3161',
    color2: '#5183ff',
    image: 'seditio-preview.png',
  },
  {
    name: 'Incramind Development Inc.',
    position: 'Software Developer',
    year: 'August 2020 - November 2021',
    description: 'Build website extensions, facebook api, develop website themes and maintain website stability using their own environment.',
    stack:[
      {
        name: 'HTML',
        icon: 'html5'
      },
      {
        name: 'CSS',
        icon: 'css3-alt'
      },
      {
        name: 'JavaScript',
        icon: 'js'
      },
      {
        name: 'PHP',
        icon: 'php'
      },
      {
        name: 'AngularJS',
        icon: 'angular'
      },
      {
        name: 'Docker',
        icon: 'docker'
      },
      {
        name: 'Git',
        icon: 'git'
      },
      {
        name: 'Linux',
        icon: 'linux'
      },
    ],
    color: '#ff7f00',
    color2: '#ff7f00',
    image: 'incramind-preview.png',
  },
  {
    name: 'Gwion Solutions',
    position: 'Web Developer',
    year: 'April 2019 - May 2020',
    description: 'Develop and maintain the web system, build websites, database management, version control, added new features to the system and integration to third-party software using REST api.',
    stack: [
      {
        name: 'HTML',
        icon: 'html5'
      },
      {
        name: 'CSS',
        icon: 'css3-alt'
      },
      {
        name: 'JavaScript',
        icon: 'js'
      },
      {
        name: 'PHP',
        icon: 'php'
      },
      {
        name: 'AngularJS',
        icon: 'angular'
      },
      {
        name: 'WordPress',
        icon: 'wordpress'
      },
      {
        name: 'Git',
        icon: 'git'
      },
      {
        name: 'Laravel',
        icon: 'laravel'
      },
    ],
    color: '#ff8d00',
    color2: '#ff8d00',
    image: 'gwion-preview.png',
  },
]

const educations = [
  {
    name: 'Bohol Island State University - Clarin Campus',
    address: 'Poblacion Norte, Clarin, Bohol',
    year: 'June 2015 - March 2019',
    description: 'Studied Object Oriented Programming, Computer and Network Troubleshooting, System Analysis and Design, Artificial Intelligence, Logic Design and Circuits and Thesis on Arduino Paper Writer Through Voice Recognition',
    logo: '',
  }
]

const skills = [
  {
    name: 'HTML',
    icon: 'html5'
  },
  {
    name: 'CSS',
    icon: 'css3-alt'
  },
  {
    name: 'JavaScript',
    icon: 'js'
  },
  {
    name: 'PHP',
    icon: 'php'
  },
  {
    name: 'MySQL',
    icon: 'mysql'
  },
  {
    name: 'AngularJS',
    icon: 'angular'
  },
  {
    name: 'Laravel',
    icon: 'laravel'
  },
  {
    name: 'jQuery',
    icon: 'jquery'
  },
  {
    name: 'Java',
    icon: 'java'
  },
  {
    name: 'React',
    icon: 'react'
  },
  {
    name: 'Sass',
    icon: 'sass'
  },
  {
    name: 'Gulp',
    icon: 'gulp'
  },
]

const skillbars = [
  {type: "PHP", level: 70},
  {type: "Java", level: 60},
  {type: "Javascript", level: 65},
  {type: "MySQL", level: 50},
  {type: "jQuery", level: 65},
  {type: "AngularJS", level: 50},
  {type: "React", level: 30},
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'g.socias29@gmail.com',
}

export { header, about, projects, educations, skills, skillbars, contact, experiences }
