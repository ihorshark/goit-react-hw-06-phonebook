import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from 'redux/phonebook/contactsSlice';
import { getFilter } from 'redux/phonebook/filterSlice';

import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

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
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <li className={s.item} key={contact.id}>
          {contact.name} {contact.number}
          <button type="button" onClick={() => onDeleteButtonClick(contact.id)}>
            Delete user
          </button>
        </li>
      ))}
    </ul>
  );
}
