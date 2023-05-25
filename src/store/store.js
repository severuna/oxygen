import { createStore,  combineReducers } from "redux";
import worksReducer from "./reducers/works.reducer";
import interiorsReducer from "./reducers/interior.reducer";

const reducers = {
    works: worksReducer,
    interiors: interiorsReducer,
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;