import Notification from './Notification/Notification';
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/phonebook/phonebook-selector';

function App() {
  const contacts = useSelector(getContacts);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <div>
          <ContactFilter />
          <ContactList />
        </div>
      ) : (
        <Notification message="No number in the phone book" />
      )}
    </>
  );
}

export default App;
