import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes }from 'react-router-dom';


import LinkList from './components/Link/LinkList';
import LinkForm from './components/Link/LinkForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' Component={LinkList}/>
    <Route path="/new-list" Component={LinkForm}/>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
