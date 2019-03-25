const defaultState = {
  data: "123",
  test: ""
};
export default (state = defaultState, action) => {
  if (action.type === "GET_DATA") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.test = action.value;
    return newState;
  } else {
    return state;
  }
};
