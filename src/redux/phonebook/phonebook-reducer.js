import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  deleteContactById,
  addContact,
  onChangeFilter,
} from './phonebook-action';

const initalContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsReducer = createReducer(initalContacts, {
  [deleteContactById]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [addContact]: (state, { payload }) => [...state, payload],
});

const filterReducer = createReducer('', {
  [onChangeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
