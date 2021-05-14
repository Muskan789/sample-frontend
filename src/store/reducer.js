const initialState = {
    loading: false,
    data:new Object()
}


function reducer(state = initialState, action) {
    console.log("action ",action);
    switch (action.type) {
        case "LOADING_STATE":
            state.loading=action.payload[0];
      const newState = {...state};
      return newState;

      case "Todo Data submitted":

      state.data[action.payload[0]]=action.payload[1];
      const newState1={...state};
      return newState1;

      case "Todo Data Clear":

      state.data=new Object();
      const newState2={...state}
      return newState;

      case "Loading":
            state = Object.assign({}, state, {loading: action.payload});
            return state;

        default:
        return state

    }
}
export default reducer;