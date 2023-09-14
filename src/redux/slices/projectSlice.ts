import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 66,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    increment: ({ value }) => {
      value = value + 1;
    },
  },
});

export const { increment } = projectSlice.actions;

export default projectSlice.reducer;
