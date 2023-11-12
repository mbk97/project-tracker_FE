import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    id: "",
    projectId: "",
    projectName: "",
    taskName: "",
    taskDescription: "",
    taskStartDate: "",
    taskEndDate: "",
    taskStatus: "",
  },
  taskData: [],
  projectDetailsData: {
    _id: "",
    projectName: "",
  },
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    },
    clearFormData: (state) => {
      state.formData = {
        id: "",
        projectId: "",
        projectName: "",
        taskName: "",
        taskDescription: "",
        taskStartDate: "",
        taskEndDate: "",
        taskStatus: "",
      };
    },
    updateTaskData: (state, action) => {
      state.taskData = action.payload;
    },
    updateProjectDetailsData: (state, action) => {
      state.projectDetailsData = action.payload;
    },
    clearProjectDetailsData: (state) => {
      state.projectDetailsData = {
        _id: "",
        projectName: "",
      };
    },
  },
});

export const {
  clearFormData,
  updateFormData,
  updateTaskData,
  updateProjectDetailsData,
  clearProjectDetailsData,
} = projectSlice.actions;

export default projectSlice.reducer;
