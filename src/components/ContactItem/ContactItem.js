import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeContact(id));

  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={handleRemove}>
        Remove
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  // onDeleteContact: PropTypes.func.isRequired,
};
