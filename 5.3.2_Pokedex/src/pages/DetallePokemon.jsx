import { useParams } from "react-router-dom";

function DetallePokemon(){

    // useParams() es un hook que le permite al componente acceder a los parámetros de la url.
    // Estos parámetros se almacenan en un objeto literal.
    /*
    const params = {
        nombrePokemon: 'Charizard'    
    }
    */
    const params = useParams();

    return(
        <h1>{params.nombrePokemon}</h1>
    )
}

export default DetallePokemon;