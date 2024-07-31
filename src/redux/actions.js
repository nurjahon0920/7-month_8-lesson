// src/redux/actions.js

import axios from "axios";
import {
  GET_TEACHERS,
  ADD_TEACHER,
  UPDATE_TEACHER,
  DELETE_TEACHER,
  GET_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "./actionTypes.js";

export const getTeachers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/teachers");
      dispatch({ type: GET_TEACHERS, payload: response.data });
    } catch (error) {
      console.error("There was an error fetching the teachers!", error);
    }
  };
};

export const addTeacher = (teacher) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/teachers",
        teacher
      );
      dispatch({ type: ADD_TEACHER, payload: response.data });
    } catch (error) {
      console.error("There was an error adding the teacher!", error);
    }
  };
};

export const updateTeacher = (id, teacher) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/teachers/${id}`,
        teacher
      );
      dispatch({ type: UPDATE_TEACHER, payload: response.data });
    } catch (error) {
      console.error("There was an error updating the teacher!", error);
    }
  };
};

export const deleteTeacher = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/teachers/${id}`);
      dispatch({ type: DELETE_TEACHER, payload: id });
    } catch (error) {
      console.error("There was an error deleting the teacher!", error);
    }
  };
};

export const getStudents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/students");
      dispatch({ type: GET_STUDENTS, payload: response.data });
    } catch (error) {
      console.error("There was an error fetching the students!", error);
    }
  };
};

export const addStudent = (student) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/students",
        student
      );
      dispatch({ type: ADD_STUDENT, payload: response.data });
    } catch (error) {
      console.error("There was an error adding the student!", error);
    }
  };
};

export const updateStudent = (id, student) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/students/${id}`,
        student
      );
      dispatch({ type: UPDATE_STUDENT, payload: response.data });
    } catch (error) {
      console.error("There was an error updating the student!", error);
    }
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      dispatch({ type: DELETE_STUDENT, payload: id });
    } catch (error) {
      console.error("There was an error deleting the student!", error);
    }
  };
};
