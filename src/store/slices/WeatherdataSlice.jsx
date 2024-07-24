import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, APIKEY } from "../../utils/ApiConfig";

const fetchWeatherData = createAsyncThunk("fetchData", async () => {
  const response = await api.get(
    `/timeline/surat?unitGroup=metric&key=${APIKEY}&contentType=json`
  );
  return response.data;
});

const weatherSlice = createSlice({
  name: "weatherdata",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  // reducers: {
  //   setWeatherData: (state, action) => {
  //     return action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }),
      builder.addCase(fetchWeatherData.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export default weatherSlice.reducer;

export { fetchWeatherData };