const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: process.env.PUBLIC_URL + '/',
    title: 'AC.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Abhinav Chaturvedi',
    role: 'Senior Consultant | Deep Learning & Data Engineering',
    description:
      'A Data engineer & a Full stack developer, currently working in Gurugram.',
    resume: process.env.PUBLIC_URL + '/resume',
    social: {
      linkedin: 'https://www.linkedin.com/in/abhinavchat/',
      github: 'https://github.com/abhinavchat',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Image Classification',
      description:
        'Classify images into cats or dogs with the help of a pre-trained InceptionV3 model.',
      stack: ['Flask', 'Python', 'Tensorflow'],
      sourceCode: 'https://github.com/abhinavchat/image_classification',
      livePreview: 'https://github.com',
    },
    {
      name: 'IRA Skill',
      description:
        'In Room Automator is an Alexa skill for hospitality industry specifically hotels.',
      stack: ['Python', 'Flask-ASK', 'MongoDB', 'AWS Lambda'],
      sourceCode: 'https://github.com/abhinavchat/ira-skill',
      livePreview: 'https://github.com/abhinavchat/ira-skill',
    },
    {
      name: 'Book Store',
      description:
        'This app could be used to track local library of books. This could be modified to cater to any needs wrt local resource management such as: media management, recipe management, etc.',
      stack: ['Flask', 'Python', 'HTML', 'CSS'],
      sourceCode: 'https://github.com/abhinavchat/book-store',
      livePreview: 'https://github.com/abhinavchat/book-store',
    },
  ]

  const youtube = [
    // content can be added an removed
    // if there are no videos, Content section won't show up
    {
      title: 'RabbitMQ 101 | Tutorial with Python',
      embed_url: "https://www.youtube.com/embed/1KYxYIZtpkE"
    }
  ];
  
  const skills = [
    {
      title: 'Javascript',
      competency: 2,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
      title: 'Node.JS',
      competency: 2,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'React',
      competency: 2,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'Bash',
      competency: 3,
      category: ['Tools', 'Languages'],
    },
    {
      title: 'Amazon Web Services',
      competency: 2,
      category: ['Web Development', 'Tools'],
    },
    {
      title: 'Heroku',
      competency: 3,
      category: ['Web Development', 'Tools'],
    },
    {
      title: 'MongoDB',
      competency: 2,
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
      competency: 1,
      category: ['Tools', 'Data Engineering'],
    },
    {
      title: 'Google Cloud Compute',
      competency: 1,
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
      competency: 4,
      category: ['Data Science', 'Python'],
    },
    {
      title: 'Jupyter',
      competency: 3,
      category: ['Data Science', 'Python'],
    },
    {
      title: 'Typescript',
      competency: 1,
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
      title: 'GoLang',
      competency: 1,
      category: ['Languages'],
    },
    {
      title: 'Ruby',
      competency: 2,
      category: ['Languages'],
    },
    {
      title: 'Data Visualization',
      competency: 3,
      category: ['Data Science', 'Javascript'],
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
      competency: 3,
      category: ['Data Engineering', 'Data Science'],
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

  
  export { header, about, projects, skills, contact, categories, youtube }
  