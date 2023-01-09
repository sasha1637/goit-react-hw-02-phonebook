import PropTypes from 'prop-types';
import {
  Forms,
  Label,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
let schema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.number().min(9).required(),
});
export default function ContactForm({ onSubmit }) {
  const nameId = nanoid();
  const numberId = nanoid();
  const id = nanoid();
  const addContact = (values, { resetForm }) => {
    onSubmit({ id, ...values });
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={addContact}
      validationSchema={schema}
    >
      <Forms autoComplete="off">
        <Label htmlFor={nameId}>
          Name<Input type="name" name="name" id={nameId}></Input>
        </Label>
        <ErrorMessage name="name" component="p" />
        <Label htmlFor={numberId}>
          Number
          <Input
            type="tel"
            name="number"
            id={numberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
        </Label>
        <ErrorMessage name="number" component="p" />
        <Button type="submit">Submit</Button>
      </Forms>
    </Formik>
  );
}
ContactForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
