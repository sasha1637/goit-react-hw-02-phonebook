import PropTypes from 'prop-types';
import { List } from 'components/ContactList/ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
export default function ContactList({ contacts, ContactDelete }) {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            data={contact}
            ContactDelete={ContactDelete}
          />
        );
      })}
    </List>
  );
}
ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  ContactDelete: PropTypes.func.isRequired,
};
