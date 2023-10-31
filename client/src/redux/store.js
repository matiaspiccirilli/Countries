import { createStore, applyMiddleware, compose } from "redux";
import  thunkMiddleware  from "redux-thunk"
import reducer from "./reducer";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // conecta el proyecto con la instalacion componentsdevtools de chorme

const store = createStore (
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
)

export default store