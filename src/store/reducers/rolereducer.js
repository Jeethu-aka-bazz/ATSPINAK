let initialstate = [
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '02',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'High',
    progress: {
      publishedJD: true,
      sourcing: true,
      shortlisting: false,
      hiring: false,
    },
  },
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '01',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'Medium',
    progress: {
      publishedJD: true,
      sourcing: true,
      shortlisting: true,
      hiring: false,
    },
  },
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '04',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'Low',
    progress: {
      publishedJD: true,
      sourcing: false,
      shortlisting: false,
      hiring: false,
    },
  },
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '04',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'High',
    progress: {
      publishedJD: true,
      sourcing: false,
      shortlisting: false,
      hiring: false,
    },
  },
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '04',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'Medium',
    progress: {
      publishedJD: true,
      sourcing: false,
      shortlisting: false,
      hiring: false,
    },
  },
];

const rolereducer = (state = initialstate, action) => {
  if (action.type === 'addRole') {
    state = [...state, action.payload];
  }
  return state;
};

export default rolereducer;
