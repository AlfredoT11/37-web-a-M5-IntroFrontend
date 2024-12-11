import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home(){

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
        <h1>Pokédex Home</h1>
        <ul>
          {pokemones.map((pokemon, index) => {
            return <li key={index}><NavLink to='/pokemon'>{pokemon.name}</NavLink></li>
          })}
        </ul>

        <NavLink to='/acercaDe'>Acerca de...</NavLink>
      </>
    )
}

export default Home;