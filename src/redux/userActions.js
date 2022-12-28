import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './userTypes';

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const filterContact = name => {
  return {
    type: FILTER_CONTACT,
    payload: name,
  };
};
