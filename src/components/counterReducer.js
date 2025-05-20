
export const reducer = (state, action) => {
  switch (action.type){
    case 'increment':
      return {...state, count: state.count + action.amount};
    case 'decrement':
      return {...state, count: state.count - action.amount};
    default:
      return state;
  }
}
