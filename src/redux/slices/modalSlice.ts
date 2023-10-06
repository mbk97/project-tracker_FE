import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addTaskModal: false,
  addProjectModal: false,
  projectDetailsModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleProjectDetailsModal: (state) => {
      state.projectDetailsModal = true;
    },
    closeProjectDetailsModal: (state) => {
      state.projectDetailsModal = false;
    },
    toggleAddTaskModal: (state) => {
      state.addTaskModal = true;
    },
    closeAddTaskModal: (state) => {
      state.addTaskModal = false;
    },
    toggleAddProjectModal: (state) => {
      state.addProjectModal = true;
    },
    closeAddProjectModal: (state) => {
      state.addProjectModal = false;
    },
  },
});

export const {
  toggleAddTaskModal,
  closeAddTaskModal,
  toggleAddProjectModal,
  closeAddProjectModal,
  toggleProjectDetailsModal,
  closeProjectDetailsModal,
} = modalSlice.actions;
export default modalSlice.reducer;
