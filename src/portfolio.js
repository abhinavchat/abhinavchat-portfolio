const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '/abhinavchat-portfolio',
    title: 'AC.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Abhinav Chaturvedi',
    role: 'Data Engineer',
    description:
      'I’m Abhinav Chaturvedi data engineer & Full stack developer, currently working in Gurugram.',
    resume: '/resume',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Project 1',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
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
    'Python'
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'abhinav.c@live.in',
  }
  
  export { header, about, projects, skills, contact }
  