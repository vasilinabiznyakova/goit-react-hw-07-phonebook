import 'react-notifications/lib/notifications.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { Label, Input, ContactForm, Button } from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(form.name.value.toLowerCase())
    ) {
      alert(`${form.name.value} is already in contacts`);
    } else {
      dispatch(
        addContact({
          name: form.elements.name.value,
          phone: form.elements.number.value,
        })
      );
      form.reset();
    }
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <Label>
        {' '}
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </ContactForm>
  );
};
