import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import '../src/Styles/index.scss';
import Landing from './Pages/Landing'
import About from './Pages/About'
import Error from './Pages/Error'
import Header from './Components/Header'

// import reportWebVitals from './reportWebVitals';

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/index";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    // devTools: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/datas/projects.json")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.error('Erreur lors du chargement des données', error));
  }, []);
  
  return (
    <React.StrictMode>  
    <Provider store={store}>  
     <BrowserRouter>  
       <Header />          
       <Routes>          
           <Route path="/" element={ <Landing datas={ datas }/>} />
           <Route path="/About" element={ <About />} />
          <Route path='*' element={ <Error />} />
       </Routes> 
     </BrowserRouter>
    </Provider>    
    </React.StrictMode>
  )
}

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
