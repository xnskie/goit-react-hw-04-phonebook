import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';

function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(({ id, name, number }, idx) => (
        <ContactListItem
          onDelete={onDelete}
          name={name}
          number={number}
          id={id}
          key={id}
          idx={idx}
        />
      ))}
    </List>
  );
}




export default ContactList;

ContactList.propeTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDelete: PropTypes.func,
};
