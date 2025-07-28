import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
`;

export const ErrorText = styled.div`
  color: red;
  margin-top: -15px;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  padding: 10px 14px;
  border: 1.5px solid #a5b4fc;
  border-radius: 8px;
  font-size: 1rem;
  background: #fff;
  transition: border 0.2s;
  &:focus {
    border-color: #6366f1;
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #334155;
  margin-bottom: 6px;
`;

export const ButtonSubmit = styled.button`
  padding: 10px 0;
  background: linear-gradient(90deg, #6366f1 0%, #38bdf8 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #818cf8 0%, #0ea5e9 100%);
  }
`;
