import { createSlice } from "@reduxjs/toolkit";

const data = {
  darkMode: false,
  openSidebar: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState: data,
  reducers: {
    toggleSidebar: (state, action) => {
      state.openSidebar = !state.openSidebar;
    },
  },
});

export const { toggleSidebar } = commonSlice.actions;

export default commonSlice.reducer;
