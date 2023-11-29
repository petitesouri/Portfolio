import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/index";

import Landing from './Pages/Landing'
import About from './Pages/About'
import Error from './Pages/Error'

import '../src/Styles/index.scss';

// import reportWebVitals from './reportWebVitals';

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    // devTools: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [datasProject, setDatasProject] = useState([])
  const [datasSkills, setDatasSkills] = useState([])

  useEffect(() => {
    fetch("/datas/projects.json")
      .then((response) => response.json())
      .then((data) => {
      const projects = data.projects;
      const skills = data.skills;
      setDatasProject(projects)
      setDatasSkills(skills)
      })  
      .catch((error) => console.error('Erreur lors du chargement des données', error));
  }, []);
  
  return (
    <React.StrictMode>  
    <Provider store={store}>  
     <BrowserRouter>            
       <Routes>          
           <Route path="/" element={ <Landing datasProject={ datasProject } datasSkills={ datasSkills }/>} />
           
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
