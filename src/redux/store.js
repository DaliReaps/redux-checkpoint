import { createStore } from "redux";
import rootReducer from "./reducers/index"
export default createStore(rootReducer,window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())