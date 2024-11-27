export default function ElementoliComponent(
    { 
        accionBoton=() => {console.log(`Botón presionado`)} 
    }
){

    return <li>Tarea pendiente <button onClick={accionBoton}>Completar</button></li>;
}