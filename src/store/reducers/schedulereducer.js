let initialState = [
  {
    id: 1,
    name: 'James Matthew',
    age: 24,
    profileMatch: '20%',
    schedule: '',
    mode: '',
    interViewer: 'Wan Gengxin',
  },
  {
    id: 2,
    name: 'Daisy Miles',
    age: 23,
    profileMatch: '70%',
    schedule: '',
    mode: '',
    interViewer: 'Wan Gengxin',
  },
  {
    id: 3,
    name: 'Jackson Parker',
    age: 22,
    profileMatch: '40%',
    schedule: '',
    mode: '',
    interViewer: 'Wan Gengxin',
  },
  {
    id: 4,
    name: 'James Matthew',
    age: 24,
    profileMatch: '50%',
    schedule: '',
    mode: '',
    interViewer: 'Wan Gengxin',
  },
  {
    id: 5,
    name: 'Lucille Thompson',
    age: 28,
    profileMatch: '66%',
    schedule: '',
    mode: '',
    interViewer: 'Wan Gengxin',
  },
  {
    id: 6,
    name: 'Daisy Miles',
    age: 24,
    profileMatch: '78%',
    schedule: '',
    mode: '',
    interViewer: 'Wan Gengxin',
  },
];

const schedulereducer = (state = initialState, action) => {
  if (action.type === 'addschedule') {
    const payload = action.payload;
    const index = payload.id - 1;
    state.splice(index, 1);
    state.push(payload);
  }
  return state;
};

export default schedulereducer;
