import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import '../src/Styles/index.scss';
import Landing from './Pages/Landing'
import About from './Pages/About'
import Error from './Pages/Error'
import Header from './Components/Header'

// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    {/* <Provider store={store}>   */}
    <BrowserRouter>  
      <Header />          
      <Routes>          
          <Route path="/" element={ <Landing />} />
          <Route path="/login" element={ <About />} />
          <Route path='*' element={ <Error />} />
      </Routes> 
      {/* <Footer />     */}
    </BrowserRouter>
    {/* </Provider>     */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
