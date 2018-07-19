import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {persistStore, autoRehydrate} from "redux-persist";
import localForage from "localforage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import getCityWeatherReducer from "./reducers/getCityWeatherReducer";

const store = createStore(
    combineReducers({
        City: getCityWeatherReducer
    }),
    {},
    composeEnhancers(applyMiddleware(thunk, logger), autoRehydrate())
);

persistStore(store, {storage: localForage});

export default store;