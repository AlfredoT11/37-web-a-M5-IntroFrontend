// Opción 1. Importar componente por componente
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';

// Opción 2. Importar todos los componentes a utilizar en una sola línea.
import { Card, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function PokemonCardComponent({nombre, id}) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <Card.Body>
                <Card.Title><NavLink to={`/pokemon/${nombre}/${id}`}>{nombre}</NavLink></Card.Title>
            </Card.Body>
        </Card>
    )
}

export default PokemonCardComponent;