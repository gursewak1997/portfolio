import emoji from 'react-easy-emoji';

import rllogo from './assets/img/icons/common/rllogo.jpg'
import flirLogo from './assets/img/icons/common/flirLogo.png'
import oncLogo from './assets/img/icons/common/oncLogo.png'
import noratekLogo from './assets/img/icons/common/noratekLogo.jpg'

export const greetings = {
    "name": "Gursewak Singh",
    "title": "Hi all, I'm Gursewak",
    "description": "A passionate Full Stack Software Developer having about 1.5 years of professional experience",
    "resumeLink": "./assets/img/icons/common/oncLogo.png"
}

export const openSource = {
  githubUserName: 'gursewak1997',
};

export const contact = {
  
}

export const socialLinks = {
    "instagram": "https://www.instagram.com/mangat00",
    "twitter": "https://twitter.com/gurmangat",
    "github": "https://github.com/gursewak1997",
    "linkedin": "https://www.linkedin.com/in/gursewak00/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'RECENT COMPUTER SCIENCE GRADUATE LOOKING TO EXPLORE',
    skills: [
      emoji('⚡ Develop interactive websites using modern tech stack'),
      emoji('⚡ Progressive team player'),
      emoji('⚡ Love talking about the latest technologies'),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'University of Victoria',
      subHeader: 'Bachelors of Science in Computer Science',
      duration: 'September 2016 - December 2020',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    }
]

export const experience = [
  {
    role: 'Software Developer',
    company: 'Reliable Controls',
    companylogo: rllogo,
    date: 'Jan 2021 – Apr 2021',
    descBullets: [
      'Develop software for RC devices in C++ and VueJS which are built to provide simple, flexible, and sustainable controls to any building environment',
      'Got familiar with professional usage of HTTP, TCP and UDP',
      'Got fluent in working with Visual Studio, Wireshark and debugging'
    ],
  },
  {
    role: 'Software Developer',
    company: 'FLIR Systems Inc.',
    companylogo: flirLogo,
    date: 'Jan 2020 – Apr 2020',
    descBullets: [
      'Develop software applications to support FLIR deep learning-enabled cameras for the research team',
      'Create, test, and deploy deep learning using Python, Keras, TensorFlow and NeuroUtility software',
      'Support deep learning research via data collection, model training, and model optimization and deployment'
    ],
  },
  {
    role: 'Software Developer',
    company: 'Ocean Networks Canada',
    companylogo: oncLogo,
    date: 'May 2019 – Aug 2019',
    descBullets: [
      'Full-stack development on a variety of projects using Java, JUnit Testing, React and Jest',
      'Practiced Agile methodology',
      'Used selenium bi-weekly for automated-regression testing',
      'Got fluent using Atlassian products such as JIRA, Confluence, and BitBucket'
    ],
  },
  {
    role: 'Software Developer',
    company: 'Noratek Solutions',
    companylogo: noratekLogo,
    date: 'Sep 2018 – Dec 2018',
    descBullets: [
      'Developed applications using JavaScript, HTML, CSS, and JQuery.',
      'Gained experience in MySQL and KendoUI Framework',
      'Development of Grails applications in IntelliJ Idea environment'
    ],
  },
]

export const projects = [
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "Gursewak",
      url: "kasjfklsdjf"
    }
  }
]