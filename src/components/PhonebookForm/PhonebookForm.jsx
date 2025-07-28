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
import { addContact } from '../../redux/contactSlice';
import { Flip, toast, ToastContainer } from 'react-toastify';

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
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newContact = { name, number, id: nanoid() };
    const doubleContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (doubleContact) {
      toast.error(`${doubleContact.name} is already in contacts`, {
        theme: 'colored',
        transition: Flip,
      });
    } else {
      dispatch(addContact({ name, number, id: nanoid() }));
      toast.success(`${newContact.name} has been added to contacts`, {
        theme: 'colored',
        transition: Flip,
      });
    }

    resetForm();
  };

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
        <ToastContainer />
      </FormStyled>
    </Formik>
  );
};
