import 'react';
import { useState, useEffect } from 'react';

export default function ContadorSaludosComponent() {

    // useState nos regresa un arreglo con los siguientes valores
    // Valor en posición 0 es la variable de estado.
    // Valor en posición 1 es la función que nos permite modificar la variable de estado.
    const [conteoHolas, setConteoHolas] = useState(0);
    const [conteoAdios, setConteoAdios] = useState(0);

    // useEffect() le permite a un componente ejecutar código.
    // Recibe un parámetro obligatorio y puede recibir un parámetro opcional.
    // El primer parámetro es un callback
    // Opción 1. Mandar el callback con una función previamente definida.
    /*
  
    function saludarComponente(){
      console.log('Hola, soy un componente');
    }
  
    useEffect(saludarComponente);
    */

    // Opción 2. Mandar el callback como una función anónima (función flecha).
    // Caso I. useEffect no recibe el segundo parámetro (dependencias).
    // El callback se ejecutara cuando el componente se monta.
    // También se ejecutará en cada re-renderizado.
    useEffect(() => {
        console.log('Soy un callback que se ejecuta en cada re-renderizado');
    });

    // Caso II. useEffect recibe una lista de dependencias.
    // El callback se ejecutará cuando el componente se monta.
    // Se ejecutará cuando una de las dependencias se modifica.
    useEffect(() => {
        console.log('Soy un callback que se ejecuta cuando alguien saluda');
    }, [conteoHolas]);

    useEffect(() => {
        console.log('Soy un callback que se ejecuta cuando alguien se despide');
    }, [conteoAdios]);

    // Si hay más de una dependencia, entonces el callback se ejecutara si cualquiera de estas se modifica.
    useEffect(() => {
        console.log('Soy un callback que se ejecuta ya sea que alguien salude o alguien se despida');
    }, [conteoHolas, conteoAdios]);

    // Caso III. useEffect recibe una lista de dependencias vacía.
    // El callback solamente se ejecuta una unica ocasión que es cuando el componente se monta.
    useEffect(() => {
        console.log('Soy un callback que únicamente se ejecuta cuando el componente se monta');
    }, []);

    function aumentarConteoHolas() {
        setConteoHolas(conteoHolas + 1);
    }

    function aumentarConteoAdios() {
        setConteoAdios(conteoAdios + 1);
    }

    return (
        <>
            <p>Conteo de Hola: {conteoHolas}</p>
            <p>Conteo de Adiós: {conteoAdios}</p>

            <button onClick={aumentarConteoHolas}>Hola</button>
            <button onClick={aumentarConteoAdios}>Adiós</button>
        </>
    );
}