import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  getContacts,
} from 'redux/phonebook/contactsSlice';
import { changeFilter, getFilter } from 'redux/phonebook/filterSlice';

import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function formSumbitHandler(name, number) {
    const addingExistingName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (addingExistingName) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: name, number: number, id: nanoid() }));
  }

  function handleFilterChange(evt) {
    dispatch(changeFilter(evt.target.value));
  }

  function getVisibleContacts() {
    if (filter === '') {
      return contacts;
    }
    const normalizedFilterText = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterText)
    );
  }

  function onDeleteButtonClick(id) {
    dispatch(deleteContact(id));
  }

  const filteredContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <Form submitHandler={formSumbitHandler} />
      <h1>Contacts</h1>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={onDeleteButtonClick}
      />
    </div>
  );
}
