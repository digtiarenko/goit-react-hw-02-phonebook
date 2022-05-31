import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleInput = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <>
        <h1> Phonebook </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input
              onChange={this.handleInput}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit"> Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
