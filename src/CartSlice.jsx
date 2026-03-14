import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.name === action.payload.name);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        ...action.payload,
        quantity: 1,
      });
    },
    removeItem: (state, action) => {
      const itemName = typeof action.payload === 'string' ? action.payload : action.payload.name;

      state.items = state.items.filter((item) => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
      const { name, amount, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      const nextQuantity = quantity ?? amount;

      if (existingItem && typeof nextQuantity === 'number') {
        existingItem.quantity = nextQuantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
