// src/redux/reducers/index.js

import { combineReducers } from "redux";
import teacherReducer from "./teacherReducer.js";
import studentReducer from "./studentReduser.js";

const rootReducer = combineReducers({
  teacher: teacherReducer,
  student: studentReducer,
});

export default rootReducer;
