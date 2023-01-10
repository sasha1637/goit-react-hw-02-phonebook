import PropTypes from 'prop-types';
import {
  Forms,
  Label,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
export default function ContactForm({ onSubmit }) {
  const id = nanoid();
  const addContact = (values, { resetForm }) => {
    onSubmit({ id, ...values });
    resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={addContact}>
      <Forms autoComplete="off">
        <Label>
          Name
          <Input
            type="name"
            name="name"
            pattern="^[/\w/]{3,15}$"
            title="The name must contain from 3 to 15 characters"
          ></Input>
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
        </Label>
        <Button type="submit">Submit</Button>
      </Forms>
    </Formik>
  );
}
ContactForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
