const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sarah Kelly',
  role: 'Software Engineer',
  description:
    'Enjoys writing sensible, highly efficient and usable code to solve complex problems and make a difference.',
  resume: 'https://sarahkellyresume.tiiny.site/',
  social: {
    linkedin: 'https://www.linkedin.com/in/sarah-kelly-se/',
    github: 'https://github.com/smkelly1691',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Toddler Time Project',
    description:
      'The Toddler Time Project helps those taking care of small children at home and finding it difficult to keep them entertained and progressively learning leading up to school age. This full stack application allows caregivers of small children to create weekly activity plans and add a variety of activities categorized by the benefit it brings to the child in order to create days full of learning and fun!!',
    stack: ['REACT', 'JAVASCRIPT', 'EXPRESS', 'NODE', 'MONGODB'],
    sourceCode: 'https://github.com/smkelly1691/toddlertime',
    livePreview: 'https://toddlertime.herokuapp.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'skelly1691@gmail.com',
}

export { header, about, projects, skills, contact }