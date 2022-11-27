// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Box } from './Box';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts).items;

  return (
    <Box>
      <Form />
      {contacts.length > 0 && (
        <Box mt="3">
          <Filter />
          <ContactsList />
        </Box>
      )}
    </Box>
  );
};
