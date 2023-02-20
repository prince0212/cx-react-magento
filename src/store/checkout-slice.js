import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    shipping_address: {},
    estimated_shipping_methods: [],
    shippiping_method: null,
    payment_methods: [],
    totals: {},
    changed: false,
    loading: false,
  },
  reducers: {
    estimatedShippingMethods(state, action) {
      state.estimated_shipping_methods = action.payload.methods;
      state.shipping_address = action.payload.address;
    },
    availablePaymentMethods(state, action) {
      state.payment_methods = action.payload.payment_methods;
      state.totals = action.payload.totals;
    },
    isLoading(state, action) {
      state.loading = action.payload.loader;
    },
  },
});
export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
