import { useState, useEffect } from 'react';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Container } from './Phonebook.styled';

const CONTACTS_LOCAL_STORAGE_KEY = 'contacts';

export const Phonebook = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(
      CONTACTS_LOCAL_STORAGE_KEY,
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const handleAddContact = newContact => {
    const isDuplicate = contacts.some(
      contact => contact.name === newContact.name
    );
    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts([...contacts, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id =>
    setContacts(prev => prev.filter(contact => contact.id !== id));

  return (
    <Container>
      <h1>Phone Book</h1>

      <ContactForm addContact={handleAddContact}></ContactForm>

      <h2>Contacts:</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange}></Filter>

      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContact}
      ></ContactList>
    </Container>
  );
};
