import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const popularAction = createAsyncThunk("get/getPopularMovies", async()=>{
    const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=00f378e7895b0d9b5b8653e265d683e1");
    return data.data.results;
});

const popularSlice = createSlice({
    name: 'popular',
    initialState: {popular: []},
    extraReducers: (builder)=>{
        builder.addCase(popularAction.fulfilled, (state, action)=>{
            state.popular = action.payload;
        })
    }
})

export default popularSlice.reducer;