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
      linkedin: 'https://www.linkedin.com/in/abhinavchat/',
      github: 'https://github.com/abhinavchat',
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
    {
      title: 'Javascript',
      competency: 4,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
      title: 'Node.JS',
      competency: 3,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'React',
      competency: 3,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'Bash',
      competency: 2,
      category: ['Tools', 'Languages'],
    },
    {
      title: 'Amazon Web Services',
      competency: 4,
      category: ['Web Development', 'Tools'],
    },
    {
      title: 'Heroku',
      competency: 2,
      category: ['Web Development', 'Tools'],
    },
    {
      title: 'MongoDB',
      competency: 3,
      category: ['Web Development', 'Databases'],
    },
    {
      title: 'ElasticSearch',
      competency: 2,
      category: ['Web Development', 'Databases'],
    },
    {
      title: 'PostgreSQL/SQLite3/SQL',
      competency: 4,
      category: ['Web Development', 'Databases', 'Languages'],
    },
    {
      title: 'Redis',
      competency: 3,
      category: ['Web Development', 'Databases'],
    },
    {
      title: 'Data Mining',
      competency: 3,
      category: ['Data Science'],
    },
    {
      title: 'Express.JS',
      competency: 2,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'D3',
      competency: 2,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'Flask',
      competency: 2,
      category: ['Web Development', 'Python'],
    },
    {
      title: 'FastApi',
      competency: 4,
      category: ['Web Development', 'Python'],
    },
    {
      title: 'Git/Mercurial',
      competency: 3,
      category: ['Tools'],
    },
    {
      title: 'Kubernetes',
      competency: 2,
      category: ['Tools', 'Data Engineering'],
    },
    {
      title: 'Google Cloud Compute',
      competency: 2,
      category: ['Tools', 'Web Development'],
    },
    {
      title: 'Numpy',
      competency: 3,
      category: ['Data Science', 'Data Engineering', 'Python'],
    },
    {
      title: 'Numba',
      competency: 2,
      category: ['Data Science', 'Data Engineering', 'Python'],
    },
    {
      title: 'Tensorflow + Keras',
      competency: 3,
      category: ['Data Science', 'Python'],
    },
    {
      title: 'Jupyter',
      competency: 3,
      category: ['Data Science', 'Python'],
    },
    {
      title: 'Typescript',
      competency: 2,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
      title: 'HTML + SASS/SCSS/CSS',
      competency: 3,
      category: ['Web Development', 'Languages'],
    },
    {
      title: 'Python',
      competency: 5,
      category: ['Languages', 'Python'],
    },
    {
      title: 'C++',
      competency: 2,
      category: ['Languages'],
    },
    {
      title: 'Julia',
      competency: 2,
      category: ['Languages'],
    },
    {
      title: 'MATLAB',
      competency: 2,
      category: ['Languages'],
    },
    {
      title: 'R',
      competency: 2,
      category: ['Languages'],
    },
    {
      title: 'Data Visualization',
      competency: 3,
      category: ['Data Science', 'Javascript'],
    },
    {
      title: 'GraphQL',
      competency: 2,
      category: ['Web Development', 'Databases'],
    },
    {
      title: 'Pandas',
      competency: 5,
      category: ['Data Engineering', 'Data Science', 'Python'],
    },
    {
      title: 'Matplotlib',
      competency: 3,
      category: ['Data Engineering', 'Data Science', 'Python'],
    },
    {
      title: 'Scikit-Learn',
      competency: 4,
      category: ['Data Engineering', 'Data Science', 'Python'],
    },
    {
      title: 'Hadoop',
      competency: 2,
      category: ['Data Engineering', 'Data Science'],
    },
    {
      title: 'Spark',
      competency: 2,
      category: ['Data Engineering', 'Data Science'],
    },
    {
      title: 'Dagster',
      competency: 2,
      category: ['Data Engineering', 'Python'],
    },
    {
      title: 'Mypy',
      competency: 3,
      category: ['Python'],
    },
    {
      title: 'Pylint',
      competency: 4,
      category: ['Data Engineering', 'Python'],
    },
  ].map((skill) => ({ ...skill, category: skill.category.sort() }));
  
  // this is a list of colors that I like. The length should be == to the
  // number of categories. Re-arrange this list until you find a pattern you like.
  const colors = [
    '#6968b3',
    '#37b1f5',
    '#40494e',
    '#515dd4',
    '#e47272',
    '#cc7b94',
    '#3896e2',
    '#c3423f',
    '#d75858',
    '#747fff',
    '#64cb7b',
  ];
  
  const categories = [
    ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
  ]
    .sort()
    .map((category, index) => ({
      name: category,
      color: colors[index],
    }));
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'abhinav.c@live.in',
  }

  
  export { header, about, projects, skills, contact, categories }
  