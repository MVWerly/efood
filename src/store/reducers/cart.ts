import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../container/RestaurantProductList'

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
      const productsLenght = state.products.length
      const newProduct = { ...action.payload }
      newProduct.id = productsLenght + 1
      state.products.push(newProduct)
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
