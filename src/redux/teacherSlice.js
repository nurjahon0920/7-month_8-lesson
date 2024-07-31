import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teachers: [],
};

const teachersSlice = createSlice({
  name: "Teachers",
  initialState,
  reducers: {
    setTeachers(state, action) {
      state.teachers = action.payload;
    },
    addTeacher(state, action) {
      state.teachers.push(action.payload);
    },
    updateTeacher(state, action) {
      const { id, data } = action.payload;
      const index = state.teachers.findIndex((teacher) => teacher.id === id);
      if (index !== -1) {
        state.teachers[index] = { ...state.teachers[index], ...data };
      }
    },
    deleteTeacher(state, action) {
      state.teachers = state.teachers.filter(
        (teacher) => teacher.id !== action.payload
      );
    },
  },
});

export const { setTeachers, addTeacher, updateTeacher, deleteTeacher } =
  teachersSlice.actions;

export default teachersSlice.reducer;
