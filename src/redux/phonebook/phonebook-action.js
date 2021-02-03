import { createAction } from '@reduxjs/toolkit';

export const deleteContactById = createAction('phoneBook/deleteContactById');
export const addContact = createAction('phoneBook/addContact');
export const onChangeFilter = createAction('phoneBook/onChangeFilter');
