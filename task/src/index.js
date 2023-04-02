import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Table from './component/Table';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route exact path ='/create-user' element={<Home />} />
      <Route exact path ='/Table' element={<Table/>} />
      <Route path="/edit-user/:id" element={<Home />} />
      
    </Routes>
    </Router>


    
  </React.StrictMode>
);


