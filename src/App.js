
import './App.css';
import React from "react";
import {Routes,Route}from 'react-router-dom';
import NavBar from './components/NavBar';
import UserList from './components/UserList';
import Details from './components/Details'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h4 className='note'> NB :MONSIEUR CLIQUER SUR LE FLECHE SITUER DANS LA CARD POUR + DE DETAILS </h4>
      <Routes>
        <Route path='/' element={< UserList />} />
        <Route path='Details/:id' element={<Details />} />      
      </Routes>
      <br/>

    </div>
  );
}

export default App;
