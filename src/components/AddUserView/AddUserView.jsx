import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/usersSlice';
import { getContacts } from 'redux/userSelectors';
import styles from '../AddUserView/AddUserView.module.css'



export default function AddContact() {
  const dispath = useDispatch();
  const contactsName = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contactsName.find(({ name }) => name === event.target.name.value)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    dispath(addContact(newContact));
    setNumber('');
    setName('');
  };

  return (
    <div>
      <form   className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.labelItem}>
          <input
            className={styles.inputItem}
            name="name"
            type="text"
            value={name}
            placeholder="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>

        <label>
          <input
            className={styles.inputItem}
            name="number"
            type="text"
            value={number}
            placeholder="number"
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
        </label>
        <button>Save contact</button>
      </form>
    </div>
  );
}
