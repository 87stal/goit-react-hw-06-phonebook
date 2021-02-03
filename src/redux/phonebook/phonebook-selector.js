export const getContacts = state => state.phoneBook.contacts;
export const getFilter = state => state.phoneBook.filter;

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);

  return filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
      )
    : contacts;
};
