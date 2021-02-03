import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-action';
import { getContacts } from '../../redux/phonebook/phonebook-selector';
import { v4 } from 'uuid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const sameName = contacts.some(
    contact => name.toLowerCase() === contact.name.toLowerCase(),
  );
  const handleSubmit = evt => {
    evt.preventDefault();
    if (sameName) {
      alert(`${name} already in contacts`);
      return;
    }
    dispatch(addContact({ name, number, id: v4() }));
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={styles.formSubmit} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={styles.formSubmitInput_name}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={styles.formSubmitInput_number}
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.formSubmitButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
