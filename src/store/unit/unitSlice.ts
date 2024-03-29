import { createSlice } from "@reduxjs/toolkit";

const initialState: "C" | "F" = "C";

const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    setUnit: (_, action) => action.payload,
  },
});

export const { setUnit } = unitSlice.actions;
export default unitSlice.reducer;
