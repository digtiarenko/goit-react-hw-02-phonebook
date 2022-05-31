import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  ContactFormHandler = data => {
    console.log(data);
    const { name } = data;
    console.log(name);
    const contactId = nanoid();

    this.setState(prevState => {
      return {
        contacts: [{ name: name, id: contactId }, ...prevState.contacts],
      };
    });
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.ContactFormHandler} />
        <ContactList contactList={this.state.contacts} />
      </div>
    );
  }
}

export { App };
