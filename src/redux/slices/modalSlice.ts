import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addTaskModal: false,
  addProjectModal: false,
  editProjectModal: false,
  deleteProjectModal: false,
  projectDetailsModal: false,
  taskDetailsModal: false,
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
    toggleTaskDetailsModal: (state) => {
      state.taskDetailsModal = true;
    },
    closeTaskDetailsModal: (state) => {
      state.taskDetailsModal = false;
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
    toggleEditProjectModal: (state) => {
      state.editProjectModal = true;
    },
    closeEditProjectModal: (state) => {
      state.editProjectModal = false;
    },
    toggleDeleteProjectModal: (state) => {
      state.deleteProjectModal = true;
    },
    closeDeleteProjectModal: (state) => {
      state.deleteProjectModal = false;
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
  toggleEditProjectModal,
  closeEditProjectModal,
  toggleDeleteProjectModal,
  closeDeleteProjectModal,
  toggleTaskDetailsModal,
  closeTaskDetailsModal,
} = modalSlice.actions;
export default modalSlice.reducer;
