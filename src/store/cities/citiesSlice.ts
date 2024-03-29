// lib
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// src
import { cityType } from "./types";
import { callToApi } from "../../utils/api";
import { CITIES_API } from "../../constants/apiConstants";

const initialState: Array<cityType> = [];

export const fetchCities = createAsyncThunk(CITIES_API, async () => {
  const response = await callToApi(CITIES_API);
  return response.slice(0, 150);
});

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCities: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (_, action) => action.payload);
  },
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer;
