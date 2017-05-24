import {localStorageMiddleware, promiseMiddleware} from "./middleware";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import reducer from "./reducer";

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware);
  } else {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger())
  }
}

const store = createStore(reducer, composeWithDevTools(getMiddleware()))

export default store;