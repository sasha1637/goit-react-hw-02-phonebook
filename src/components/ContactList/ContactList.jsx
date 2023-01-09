import PropTypes from 'prop-types';
import { Ul, Item } from 'components/ContactList/ContactList.styled';
export default function ContactList({ contacts, ContactDelete }) {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}:{number}
            <button
              onClick={() => {
                ContactDelete(id);
              }}
              type="button"
            >
              Delete
            </button>
          </Item>
        );
      })}
    </Ul>
  );
}
ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  ContactDelete: PropTypes.func.isRequired,
};
