import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}
