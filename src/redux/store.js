import { configureStore } from '@reduxjs/toolkit';
// reducers
import authReducer from './auth/auth-slice'
import contactReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
  },
});
