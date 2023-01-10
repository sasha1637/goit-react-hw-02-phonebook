import PropTypes from 'prop-types';
import { List } from 'components/ContactList/ContactList.styled';
import { ContactListItem } from 'components/ContactList/ContactListItem';
import { toast } from 'react-toastify';
export default function ContactList({ contacts, ContactDelete }) {
  return (
    <List>
      {!contacts.length
        ? toast.success(`Contact list empty`, {
            position: 'top-center',
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
        : contacts.map(contact => {
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
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  ContactDelete: PropTypes.func.isRequired,
};
