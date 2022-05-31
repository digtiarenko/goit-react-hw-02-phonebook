import React from 'react';

function ContactList({ contactList }) {
  return (
    <>
      <h1> Contacts </h1>
      <ul>
        {contactList.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}{' '}
      </ul>
    </>
  );
}

export default ContactList;
