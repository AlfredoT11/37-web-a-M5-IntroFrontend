import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    // async-await

    async function consultarPokemones(){   
      try{
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        let responseJson = await response.json();
        setPokemones(responseJson.results);
      }catch(e){
        console.log(`Ocurrió un error`);
        console.log(e);
      }
    }

    consultarPokemones();
  }, []);

  return (
    <>
      <h1>Pokédex</h1>
      <ul>
        {pokemones.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}
      </ul>
    </>
  )
}

export default App
