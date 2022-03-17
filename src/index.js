import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import { UserAuthContextProvider } from './context/UserAuthContext';

import "./assets/themify-icons/themify-icons.css";
import "./sass/index.scss";

import Layout from "./components/Layout";

ReactDOM.render(
  <UserAuthContextProvider>
    <Provider store={store}>
      <Layout />
    </Provider>
  </UserAuthContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
