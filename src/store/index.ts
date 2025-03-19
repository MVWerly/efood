import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartRedcucer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartRedcucer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RooReducer = ReturnType<typeof store.getState>
