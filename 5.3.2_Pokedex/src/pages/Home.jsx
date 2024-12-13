import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PokemonCardComponent from "../components/PokemonCardComponent";

function Home() {

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    // async-await

    async function consultarPokemones() {
      try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        let responseJson = await response.json();
        console.log(responseJson);
        setPokemones(responseJson.results);
      } catch (e) {
        console.log(`Ocurrió un error`);
        console.log(e);
      }
    }

    consultarPokemones();
  }, []);


  /*

    Cadena original -> "Hola a todos en la clase"
    Separador -> " "
    split()
    ["Hola", "a", "todos", "en", "la", "clase"];

    Cadena original -> https://pokeapi.co/api/v2/pokemon/153/
    Separador -> /
    split()
     0          1             2      3     4          5      6
    ["https:", "", "pokeapi.co", "api", "v2", "pokemon", "153"] 
  */

  return (
    <>
      <h1>Pokédex</h1>
      {pokemones.map((pokemon, index) => {
        return <PokemonCardComponent key={index} nombre={pokemon.name} id={pokemon.url.split('/')[6]}></PokemonCardComponent>
      })}

      <NavLink to='/acercaDe'>Acerca de...</NavLink>
    </>
  )
}

export default Home;