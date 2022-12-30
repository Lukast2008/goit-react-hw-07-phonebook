import { useDispatch, useSelector } from 'react-redux';
import { filterContactSelector } from 'redux/contactSelectors';
import { filterContact } from 'redux/contactSlice';
import styles from '../Phonebook/styles.module.css';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filterItem = useSelector(filterContactSelector);

  const onChange = ev => {
    dispatch(filterContact(ev.target.value));
  };

  return (
    <form className={styles.bodyform}>
      <label className={styles.label}>
        <input
          className={styles.inputItemFind}
          type="text"
          name="filter"
          value={filterItem}
          onChange={onChange}
          placeholder={'find contact by name'}
        />
      </label>
    </form>
  );
};
