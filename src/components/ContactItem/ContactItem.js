import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <Button type="button" onClick={handleDelete}>
        Remove
      </Button>
    </Item>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }),
// };
