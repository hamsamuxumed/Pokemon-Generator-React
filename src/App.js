import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages'


import './App.css';


function App() {
  return (
    <>
      {/* <Routes> */}
      {/* <Route exact path='/'> */}
      <Pages.About info='The Pokémon universe is a fictional universe that encompasses the Pokémon media franchise, including stories and fictional works produced by The Pokémon Company. The concept of the Pokémon universe, in both the fictional works and the general nonfictional world of Pokémon. ' />
      <Pages.GenPokemon />
      {/* </Route> */}
      {/* </Routes> */}

    </>
  );
}

export default App;
