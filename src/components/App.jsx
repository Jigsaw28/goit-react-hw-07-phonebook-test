import { Flip, ToastContainer } from 'react-toastify';
import { Container, Title } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <PhonebookForm />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
      <ToastContainer autoClose={2000} transition={Flip} theme="colored" />
    </Container>
  );
};
