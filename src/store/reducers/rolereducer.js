let initialstate = [
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '02',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'High',
    publishedJD: true,
    sourcing: false,
    shortlisting: false,
    hiring: false,
  },
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '02',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'High',
    publishedJD: true,
    sourcing: false,
    shortlisting: false,
    hiring: false,
  },
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '02',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'High',
    publishedJD: true,
    sourcing: false,
    shortlisting: false,
    hiring: false,
  },
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '02',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'High',
    publishedJD: true,
    sourcing: false,
    shortlisting: false,
    hiring: false,
  },
  {
    name: 'Product Manager',
    department: 'Sales team',
    noofrecruitment: '02',
    createddate: '12 May 2022',
    closedDate: '12 Jun 2022',
    priority: 'High',
    publishedJD: true,
    sourcing: false,
    shortlisting: false,
    hiring: false,
  },
];

const rolereducer = (state = initialstate, action) => {
  if (action.type === 'addRole') {
    state = [...state, action.payload];
  }
  return state;
};

export default rolereducer;
