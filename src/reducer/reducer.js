const reducer = (states, action) => {
  const state = JSON.parse(JSON.stringify(states))  //不建议这样做，性能开销大
  switch (action.type) {
    case 'addOne':
      state.times += action.payload
      return state
    default:
      return state
  }
}

export default reducer