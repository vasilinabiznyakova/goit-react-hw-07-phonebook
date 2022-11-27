import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };
  return (
    <FilterLabel>
      Find contacts by name:
      <input type="text" onChange={onChange} />
    </FilterLabel>
  );
};
