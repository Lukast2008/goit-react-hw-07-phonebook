import React from 'react';
// import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/usersSlice';
import { getFilter } from 'redux/userSelectors';
import styles from '../Filter/Filters.module.css'

export default function ContactFilter() {
  const dispath = useDispatch();

  const filterValue =  useSelector(getFilter)
  const handleChangeInput = ({target:{value}}) => {
    dispath( filterContact(value))
  };

  return (
    <>
      <input  
      className={styles.inputItem}
        name="name"
        type="text"
        value={filterValue}
        placeholder="find contact by name"
        onChange={handleChangeInput}
      ></input>
    </>
  );
}
