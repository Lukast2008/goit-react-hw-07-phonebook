export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const filterContact = state => {
  const contacts = getContacts(state);
  const filterName = getFilter(state);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterName.toLowerCase())
  );
};
