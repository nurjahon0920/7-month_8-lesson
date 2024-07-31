// src/redux/reducers/teacherReducer.js

import {
  GET_TEACHERS,
  ADD_TEACHER,
  UPDATE_TEACHER,
  DELETE_TEACHER,
} from "../actionTypes";

const initialState = {
  teachers: [],
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };
    case ADD_TEACHER:
      return {
        ...state,
        teachers: [...state.teachers, action.payload],
      };
    case UPDATE_TEACHER:
      return {
        ...state,
        teachers: state.teachers.map((teacher) =>
          teacher.id === action.payload.id ? action.payload : teacher
        ),
      };
    case DELETE_TEACHER:
      return {
        ...state,
        teachers: state.teachers.filter(
          (teacher) => teacher.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default teacherReducer;
