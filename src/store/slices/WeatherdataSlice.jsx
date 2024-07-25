import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, APIKEY } from "../../utils/ApiConfig";

const fetchWeatherData = createAsyncThunk("fetchData", async (locations) => {
  try {
    const response = await api.get(
      `/timeline/${
        !locations ? 'Gujarat' : locations
      }?unitGroup=metric&key=${APIKEY}&contentType=json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
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
      state.error = null;
    }),
      builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }),
      builder.addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;

export { fetchWeatherData };
