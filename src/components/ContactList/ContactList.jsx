import PropTypes from 'prop-types';
import React from 'react';
import styles from './ContactList.module.css';

function ContactList({ contactList, onDelete }) {
  return (
    <>
      <ul>
        {contactList.map(contact => (
          <li key={contact.id} className={styles.listUnit}>
            <span className={styles.span}>
              {contact.name}: {contact.number}
            </span>
            <button
              onClick={() => {
                onDelete(contact.id);
              }}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}{' '}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
