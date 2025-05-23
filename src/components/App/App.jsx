import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

const getInitialContacts = () => {
  const saved = localStorage.getItem('contacts');
  return saved
    ? JSON.parse(saved)
    : [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
};

const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    setContacts(prev => [...prev, newContact]);
    actions.resetForm();
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleFilterChange = evt => {
    setFilter(evt.target.value.toLowerCase());
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>📖 Phonebook of Pixie Hollow</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
