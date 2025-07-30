import {
  ContactInfo,
  ContactName,
  ContactNumber,
  DeleteButton,
  List,
  ListItem,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { getContactsThunk, deleteContact } from '../../redux/operations';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted successfully!', {
      theme: 'colored',
      transition: Flip,
    });
  };

  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id} className="item">
          <ContactInfo className="item">
            <ContactName>{contact.name}</ContactName>
            <ContactNumber>{contact.phone}</ContactNumber>
          </ContactInfo>
          <DeleteButton
            className="btn-delete"
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
      <ToastContainer />
    </List>
  );
};
