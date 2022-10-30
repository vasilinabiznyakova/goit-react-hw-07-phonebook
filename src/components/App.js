import { useState } from 'react';
import { Box } from './Box';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    contacts
      .map(contact => contact.name.toLowerCase())
      .includes(data.name.toLowerCase())
      ? alert(`${data.name} is already in contacts`)
      : setContacts([...contacts, ...[data]]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Box>
      <Form onSubmitData={formSubmitHandler} />
      {contacts.length > 0 && (
        <div>
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
          <Filter value={filter} onChange={changeFilter} />
        </div>
      )}
    </Box>
  );
};
