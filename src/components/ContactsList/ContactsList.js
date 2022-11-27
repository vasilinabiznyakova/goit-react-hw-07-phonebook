import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Box } from '../Box';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts).items;
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (filter.length > 0) {
      const normalizedFilter = filter[0].toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  return (
    <Box>
      <h4>Contacts:</h4>
      <List>
        {getVisibleContacts().map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>
    </Box>
  );
};
