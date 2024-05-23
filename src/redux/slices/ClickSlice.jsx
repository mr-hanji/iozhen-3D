import { createSlice } from "@reduxjs/toolkit";

export const ClickSlice = createSlice({
  name: "click",
  initialState: {
    isClicked: false,
    reset: false,
  },
  reducers: {
    setIsClicked(state, action) {
      state.isClicked = action.payload;
    },
    setReset(state, action) {
      state.reset = action.payload;
    },
  },
});

export const { setIsClicked, setReset } = ClickSlice.actions;

export default ClickSlice.reducer;
