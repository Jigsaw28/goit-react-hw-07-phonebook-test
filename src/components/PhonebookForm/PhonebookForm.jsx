import { nanoid } from 'nanoid';
import {
  ButtonSubmit,
  ErrorText,
  FormStyled,
  Input,
  Label,
} from './PhonebookForm.styled';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Flip, toast } from 'react-toastify';
import { addContact } from '../../redux/operations';
import { useEffect, useState } from 'react';

const schema = yup.object({
  name: yup.string().required('Enter name, please.'),
  number: yup.number().required('Enter number, please.'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = { name: '', number: '' };

export const PhonebookForm = () => {
  let nameId = nanoid();
  let numberId = nanoid();

  const dispatch = useDispatch();
  const [pendingName, setPendingName] = useState(null);
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newContact = { name, number, id: nanoid() };
    const doubleContact = contacts.items.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (doubleContact) {
      toast.error(`${doubleContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      setPendingName(newContact.name);
    }

    resetForm();
  };

  useEffect(() => {
    if (!contacts.isLoading && pendingName) {
      toast.success(`${pendingName} has been added to contacts`, {
        theme: 'colored',
        transition: Flip,
        autoClose: 2000,
      });
      setPendingName(null);
    }
  }, [contacts.isLoading, pendingName]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <Label htmlFor={nameId}>Name</Label>
        <Input type="text" name="name" id={nameId} />
        <FormError name="name" component="div" />
        <Label htmlFor={numberId}>Number</Label>
        <Input type="tel" name="number" id={numberId} />
        <FormError name="number" component="div" />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormStyled>
    </Formik>
  );
};
