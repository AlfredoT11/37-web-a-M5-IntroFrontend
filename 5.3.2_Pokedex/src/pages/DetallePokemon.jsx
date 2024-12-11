import { useParams } from "react-router-dom";
import PokemonCardComponent from "../components/PokemonCardComponent";

function DetallePokemon() {

    // useParams() es un hook que le permite al componente acceder a los parámetros de la url.
    // Estos parámetros se almacenan en un objeto literal.
    /*
    const params = {
        nombrePokemon: 'Charizard'    
    }
    */
    const params = useParams();

    return (
        <>
            <h1>{params.nombrePokemon}</h1>
            <PokemonCardComponent nombre={params.nombrePokemon} id={32}></PokemonCardComponent>
        </>
    )
}

export default DetallePokemon;