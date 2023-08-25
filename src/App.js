import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemonNames = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        const pokemonData = response.data.results;
        const names = pokemonData.map(pokemon => pokemon.name);
        setPokemonNames(names);
      })
      .catch(err=>res.json({message: "algo salio mal", error: err}));   
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch Pokemon</h1>
        <button onClick={fetchPokemonNames}>Fetch Pokemon</button>
        <div className="pokemon-list">
          <h2>Pokemon Names:</h2>
          <ul>
            {pokemonNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;