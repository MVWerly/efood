import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  isOpen: boolean
  products: Product[]
}

const initialState: CartState = {
  products: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer
