import { Label } from 'components/PhonebookForm/PhonebookForm.styled';
import { nanoid } from 'nanoid';
import { FilterBlock, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { useRef } from 'react';

export const Filter = () => {
  const filterId = useRef(nanoid()).current
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  
  const handleFilterChange= (e)=> {
    const value = e.target.value;
    dispatch(setFilter(value));
  }

  
  return (
    <FilterBlock>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <Input type="text" id={filterId}  onChange={handleFilterChange} value={filter}/>
    </FilterBlock>
  );
};
