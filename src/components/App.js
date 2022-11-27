// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Box } from './Box';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

// import { useLocalStorage } from '../hooks/useLocalStorage';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Box>
      <Form />
      {contacts.length > 0 && (
        <div>
          <Filter />
          <ContactsList />
        </div>
      )}
    </Box>
  );
};
