import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Wrapper, Title, Message } from 'components/App.styled';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
const LS_KEY = 'Contact';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    const parsedContact = JSON.parse(contacts);
    if (parsedContact) {
      this.setState({
        contacts: parsedContact,
      });
    }
  }
  componentDidUpdated(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

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
    const { name, number: NewNumber } = data;
    const normalizeName = name.toLowerCase();
    if (
      contacts.find(
        ({ name, number }) =>
          name.toLowerCase() === normalizeName || number === NewNumber
      )
    ) {
      toast(
        'The subscriber with such contact details is already in the phone book '
      );
    } else {
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    }
  };
  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ToastContainer />

        <ContactForm onSubmit={this.AddContact}></ContactForm>
        <Title>Contacts</Title>
        {this.state.contacts.length ? (
          <>
            <Filter value={this.state.filter} onChange={this.Filter} />
            {this.getVisibleContacts().length ? (
              <ContactList
                contacts={this.getVisibleContacts()}
                ContactDelete={this.ContactDelete}
              />
            ) : (
              <Message>No find contact</Message>
            )}
          </>
        ) : (
          <Message>No contact</Message>
          /* toast.success(
            `После этого сообщения рендериться количество toast которые были вызваны `
          ) */
        )}
      </Wrapper>
    );
  }
}
