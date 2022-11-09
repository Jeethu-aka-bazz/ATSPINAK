let initialState = {
  role: 'Senior full stack developer ',
  description:
    'We are looking for a skilled react.js developer to join our front-end development team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.',
  experience: '2+ years experience as a Full Stack Developer or similar role ',
  education: 'Degree in Computer Science, Statistics or relevant field',
  technicalcompetencies: [
    'Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)',
    'Knowledge of multiple back-end languages (e.g. C#, Java, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)',
    'Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design',
  ],
  managerialcompetencies: '',
  behavioralcompetencies: [
    'Excellent communication and teamwork skills',
    'Great attention to detail',
    'Organizational skills',
    'An analytical mind',
  ],
  responsibilities: [
    'Work with development teams and product managers to ideate software solutions',
    'Design client-side and server-side architecture',
    'Build the front-end of applications through appealing visual design',
    'Develop and manage well-functioning databases and applications',
    'Write effective APIs',
    'Test software to ensure responsiveness and efficiency',
    'Troubleshoot, debug and upgrade software',
    'Create security and data protection settings',
    'Build features and applications with a mobile responsive design',
    'Write technical documentation',
    'Work with data scientists and analysts to improve software',
  ],
  location: 'London, Bangalore',
};

const jdreducer = (state = initialState, action) => {
  if (action.type === 'editJD') {
    state = {...state, ...action.payload};
  } else if (action.type === 'createnewjd') {
    state = {...action.payload};
  }
  return state;
};

export default jdreducer;
