import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Forms = styled(Form)`
  width: 300px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 40px;
`;
export const Label = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const Input = styled(Field)`
  margin-top: 20px;
  font-size: 18px;
  border-radius: 4px;
`;
export const Button = styled.button`
  font-size: 18px;
  border-radius: 4px;
  padding: 10px 20px;
`;
