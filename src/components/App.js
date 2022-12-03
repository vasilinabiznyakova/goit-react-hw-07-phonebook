// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { Box } from './Box';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Form />

      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <Box mt="3">
          <Filter />
          {isLoading && !error && <p>Loading contacts...</p>}
          <ContactsList />
        </Box>
      )}
    </Box>
  );
};
