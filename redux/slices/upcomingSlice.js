import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const upcomingAction = createAsyncThunk("get/getUpcomingMovies", async()=>{
    const data = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=00f378e7895b0d9b5b8653e265d683e1");
    return data.data.results;
});

const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState: {upcoming: []},
    extraReducers: (builder)=>{
        builder.addCase(upcomingAction.fulfilled, (state, action)=>{
            state.upcoming = action.payload;
        })
    }
})

export default upcomingSlice.reducer;