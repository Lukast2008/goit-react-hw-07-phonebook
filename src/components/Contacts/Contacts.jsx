import styles from '../Phonebook/styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector, filterContactSelector } from 'redux/contactSelectors';
import { deleteContact } from 'redux/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(contactSelector);

  const filterItem = useSelector(filterContactSelector);

  const filterAtContacts = contactsList.filter(({ name }) =>
    name.toLowerCase().includes(filterItem.toLowerCase())
  );

  const contactDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {filterAtContacts.map(el => (
        <li className={styles.listItem} id={el.id} key={el.id}>
          {el.name}: {el.phone}
          <button
            className={styles.listButton}
            type="button"
            onClick={() => contactDelete(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
