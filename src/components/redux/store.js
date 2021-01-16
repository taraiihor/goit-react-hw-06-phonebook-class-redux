import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from '../redux/contacts/contact-reducer';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../redux/contacts/contact-localStoredg';

const rootReducer = combineReducers({ contacts: contactsReducer });
const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
