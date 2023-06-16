import {configureStore,applyMiddleware} from "@reduxjs/toolkit"
import thunkMiddleware from "react-redux"

import cartReducer from "../features/cartSlice/cartSlice"
const store = configureStore({
    reducer:{
        cart:cartReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware() //.concat(yourMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
export default store;