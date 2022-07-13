import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const getFilter = state => state.filter.contacts.filter;
