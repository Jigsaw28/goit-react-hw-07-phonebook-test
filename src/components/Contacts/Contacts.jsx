import {
  ContactInfo,
  ContactName,
  ContactNumber,
  DeleteButton,
  List,
  ListItem,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { getContactsThunk, deleteContact } from '../../redux/operations';
import { Loader } from 'components/Loader/Loader';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleDelete = id => {
    setDeleteId(id);
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    if (!contacts.isLoading && deleteId !== null) {
      toast.success('Contact deleted successfully!');
      setDeleteId(null);
    }
  }, [contacts.isLoading, deleteId]);

  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {!contacts.isLoading ? (
        filteredContacts.map(contact => (
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
        ))
      ) : (
        <Loader />
      )}
    </List>
  );
};
