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
    removeCustomerDetails: (state, action) => {
      const contact = action.payload;
      state.customerDetails = state.customerDetails.filter(
        (item) => item.contactNumber !== contact
      );
    },
  },
});

export const { getCustomerDetails,removeCustomerDetails } = cart.actions;
export default cart.reducer;
