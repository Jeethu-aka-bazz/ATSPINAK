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
    name: 'James Matthew',
    age: 24,
    profileMatch: '50%',
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
