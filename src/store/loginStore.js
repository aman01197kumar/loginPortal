import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerDetails: [],
};

export const cart = createSlice({
  name: "customerData",
  initialState,
  reducers: {
    getCustomerDetails: (state, action) => {
      state.customerDetails.push(action.payload);
    },
  },
});

export const { getCustomerDetails } = cart.actions;
export default cart.reducer;
