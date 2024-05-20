import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const topRatedAction = createAsyncThunk("get/getTopRatedMovies", async()=>{
    const data = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=00f378e7895b0d9b5b8653e265d683e1");
    return data.data.results;
});

const topRatedSlice = createSlice({
    name: 'topRated',
    initialState: {topRated: []},
    extraReducers: (builder)=>{
        builder.addCase(topRatedAction.fulfilled, (state, action)=>{
            state.topRated = action.payload;
        })
    }
})

export default topRatedSlice.reducer;