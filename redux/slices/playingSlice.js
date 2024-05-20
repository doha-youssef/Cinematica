import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const playingAction = createAsyncThunk("get/getPlayingMovies", async()=>{
    const data = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=00f378e7895b0d9b5b8653e265d683e1");
    return data.data.results;
});

const playingSlice = createSlice({
    name: 'playing',
    initialState: {playing: []},
    extraReducers: (builder)=>{
        builder.addCase(playingAction.fulfilled, (state, action)=>{
            state.playing = action.payload;
        })
    }
})

export default playingSlice.reducer;