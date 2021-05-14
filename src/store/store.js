// import { applyMiddleware, createStore } from "redux";
// //import combineRedux from "./combineRedux";
// import reducer from './reducer';
// const store = createStore(reducer)

// export default store;

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;