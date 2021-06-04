import { apiCallBegan } from '@/customActions/api';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppGetState } from 'store';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: null,
    error: '',
    loading: false,
  },
  reducers: {
    productsRequested: (state, action) => {
      state.loading = true;
    },
    productsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    productsRequestedFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// ACTIONS
export const { productsRequested, productsReceived, productsRequestedFailed } =
  productsSlice.actions;

// REDUCERS
export default productsSlice.reducer;

// ACTION CREATORS
export const actionFetchProducts =
  (keyword = '') =>
  async (dispatch: AppDispatch, getState: AppGetState) => {
    dispatch(
      apiCallBegan({
        url: `/api/products?keyword=${keyword}`,
        onStart: productsRequested.type,
        onSuccess: productsReceived.type,
        onError: productsRequestedFailed.type,
      })
    );
  };
