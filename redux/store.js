import { configureStore } from "@reduxjs/toolkit";
import popularReducer from './slices/popularSlice'
import topRatedReducer from './slices/topRatedSlice'
import upcomingReducer from './slices/upcomingSlice'
import playingReducer from './slices/playingSlice'


const store = configureStore({
    reducer: {
        popular: popularReducer,
        topRated: topRatedReducer,
        upcoming: upcomingReducer,
        playing: playingReducer
    }
})

export default store;

