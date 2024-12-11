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

  return (
    <>
      <h1>Pokédex Home</h1>
      {pokemones.map((pokemon, index) => {
        return <PokemonCardComponent key={index} nombre={pokemon.name} id={32}></PokemonCardComponent>
      })}

      <NavLink to='/acercaDe'>Acerca de...</NavLink>
    </>
  )
}

export default Home;