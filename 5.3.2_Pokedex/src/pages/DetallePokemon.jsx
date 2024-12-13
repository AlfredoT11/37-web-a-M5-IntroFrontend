import { useParams } from "react-router-dom";
import PokemonCardComponent from "../components/PokemonCardComponent";
import { useState, useEffect } from "react";

function DetallePokemon() {

    const [detallePokemon, setDetallePokemon] = useState({});

    // useParams() es un hook que le permite al componente acceder a los parámetros de la url.
    // Estos parámetros se almacenan en un objeto literal.
    /*
    const params = {
        nombrePokemon: 'Charizard'    
    }
    */
    const params = useParams();

    useEffect(() => {
        // async-await
    
        async function consultarDetallesPokemon() {
          try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);
            let responseJson = await response.json();
            console.log(responseJson);
            setDetallePokemon(responseJson);
          } catch (e) {
            console.log(`Ocurrió un error`);
            console.log(e);
          }
        }
    
        consultarDetallesPokemon();
      }, []);

    return (
        <>
            <h1>{params.nombrePokemon}</h1>
            <PokemonCardComponent nombre={params.nombrePokemon} id={params.id}></PokemonCardComponent>
            <ul>
                {detallePokemon?.stats.map((stat, index) => <li>{stat.stat.name} : {stat.base_stat}</li>)}
            </ul>
        </>
    )
}

export default DetallePokemon;