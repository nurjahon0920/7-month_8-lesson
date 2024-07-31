// src/redux/reducers/studentReducer.js

import {
  GET_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../actionTypes";

const initialState = {
  students: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default studentReducer;
