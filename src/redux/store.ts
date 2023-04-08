import {configureStore} from "@reduxjs/toolkit"
import {reducer} from './slices/Rootslice'

export const store = configureStore({
    reducer,
    devTools: true,
    
})