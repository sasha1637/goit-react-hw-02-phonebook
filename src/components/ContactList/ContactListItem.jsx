import PropTypes from 'prop-types';
import { Item, Button } from 'components/ContactList/ContactListItem.styled';
export function ContactListItem({ data, ContactDelete }) {
  const { id, name, number } = data;
  return (
    <Item>
      {name}:{number}
      <Button
        type="button"
        onClick={() => {
          ContactDelete(id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
}
ContactListItem.protoTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  ContactDelete: PropTypes.func.isRequired,
};
