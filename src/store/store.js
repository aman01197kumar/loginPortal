import { configureStore } from '@reduxjs/toolkit';
import loginStore from './loginStore';
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key:'root',
  version:1,
  storage
};

const reducer = combineReducers({

  customerData : loginStore
})

const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
  reducer:persistedReducer
});