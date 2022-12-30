import { useEffect } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './Contacts/Contacts';

import { FilterContacts } from './Filter/Filter';
import styles from './Phonebook/styles.module.css';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Phonebook />
      <h2 className={styles.title}>Contacts</h2>
      <FilterContacts />
      <ContactList />
    </div>
  );
};
