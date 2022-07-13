const initialContacts = () => {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  return parsedContacts ? parsedContacts : [];
};

export const initialState = {
  contacts: {
    items: initialContacts(),
    filter: '',
  },
};
