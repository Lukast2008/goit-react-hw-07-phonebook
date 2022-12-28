import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/userSelectors';
import { deleteContact } from 'redux/usersSlice';
import styles from '../HomeView/Home.module.css'

export default function HomeView() {
  const dispatch = useDispatch();

  const contactsList = useSelector(filterContact);

  return (
    <ul
  className={styles.list}
    >
      {contactsList.map(({ name, number, id }) => (
        <li
          className={styles.listItem}
          id={id}
          key={id}
        >
          {name}: {number}
          <button
            className={styles.listButton}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
