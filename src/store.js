import { createStore, combineReducers, applyMiddleware } from "redux";  // Correct import
import { thunk } from "redux-thunk"; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { TodoReducer } from "./reducers/TodoReducer"

const reducer = combineReducers({
  Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];  

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
      )
);

export default store;
