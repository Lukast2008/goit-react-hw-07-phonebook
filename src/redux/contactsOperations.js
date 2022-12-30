import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63ac57c634c46cd7ae7f01a4.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contact/getContact',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/contact');
      return data;
    } catch (error) {
      rejectedWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post('/contact', contact);
      return data;
    } catch (error) {
      rejectedWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectedWithValue }) => {
    try {
      await axios.delete(`/contact/${id}`);
      return id;
    } catch (error) {
      rejectedWithValue(error);
    }
  }
);
