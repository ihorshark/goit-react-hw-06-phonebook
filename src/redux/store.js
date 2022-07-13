import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './phonebook/contactsSlice';
import { filterSlice } from './phonebook/filterSlice';

export const store = configureStore({
  reducer: {
    contactList: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
