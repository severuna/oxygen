import { createStore,  combineReducers } from "redux";
import worksReducer from "./reducers/works.reducer";

const reducers = {
    works: worksReducer,
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;