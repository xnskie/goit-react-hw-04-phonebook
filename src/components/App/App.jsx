import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactsTitle, Container, FilterTitle, Title } from './App.styled';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import contact from './conacts';

const App = () => {
  const [contacts, setContacts] = useState(()=> {
    const con = JSON.parse(localStorage.getItem('contacts'))
    return con ? con : [...contact]
  });
  const [filter, setFilter] = useState('');
  
// console.log()
  useEffect(()=> {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const handleSubmit = ({name, number}) => {
    const normilizedName = name.toLowerCase();
    const equalName = contacts.find(({name}) => {
      return (name.toLowerCase() === normilizedName)
    });
    if (equalName) return (alert(equalName.name + ' is already in contacts.'), alert.preventDefault());

    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number
      }
      return [newContact, ...prevContacts]
    });
  };

  const changeFilter = ({target}) => {
    setFilter(target.value);
  };

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({name}) => {
      return (name.toLocaleLowerCase().includes(normalizedFilter))
    })
    return result;
  };

  const deleteContacts = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length ? (
        <ContactList
          contacts={getVisibleContacts()}
          onDelete={deleteContacts}
        />
      ) : (
        <p>No contacts yet</p>
      )}
    </Container>
  );
}

/*
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    // console.log(item);
    if (contacts) {
      this.setState({contacts})
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    const {contacts} = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    } 
    // if (prevState.contacts.length > contacts.length) {
    //   localStorage.setItem('contacts', JSON.stringify(prevState.contacts))
    // }
  }




  handleSubmit = data => {
    const equalName = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (equalName) return (alert(equalName.name + ' is already in contacts.'), alert.preventDefault());

    data.id = nanoid();
    this.setState(prev => ({ contacts: [data, ...prev.contacts] }));
  };

  changeFilter = e => {
    // e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterTitle>Find contacts by name</FilterTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={this.getVisibleContacts()}
            onDelete={this.deleteContacts}
          />
        ) : (
          <p>No contacts yet</p>
        )}
      </Container>
    );
  }
}
*/

export default App;
