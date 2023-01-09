import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <PhoneBook />
    </>
  );
};
class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  Filter = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  ContactDelete = id => {
    const contactDelete = this.state.contacts.find(
      contact => contact.id === id
    );
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
    toast.success(`Contact deleted ${contactDelete.name}`);
  };

  AddContact = data => {
    const { contacts } = this.state;
    const contact = data;
    const { name: NewNameContact, number: NewNumberContact } = contact;
    if (
      contacts.find(
        ({ name, number }) =>
          name === NewNameContact || number === NewNumberContact
      )
    ) {
      toast(
        'The subscriber with such contact details is already in the phone book '
      );
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };
  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ContactForm onSubmit={this.AddContact}></ContactForm>

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.Filter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          ContactDelete={this.ContactDelete}
        />
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  padding: 20px;
`;

// (!this.getVisibleContacts().length) {

//          toast.error('🦄 Oops, unsuccessful search', {
//            position: 'top-center',
//            autoClose: true,
//            hideProgressBar: false,
//            closeOnClick: true,
//            pauseOnHover: true,
//            draggable: true,
//            progress: undefined,
//            theme: 'dark',
//          });

//     }

//     if (!this.state.contacts.length) { toast.success(`Contact list empty`, {
//     position: 'top-center', autoClose: 3000, hideProgressBar: false,
//     closeOnClick: true, pauseOnHover: true, draggable: true, progress:
//     undefined, theme: 'dark', }); }
