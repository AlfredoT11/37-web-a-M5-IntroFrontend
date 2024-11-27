export default function ElementoliComponent(
    { 
        textoTarea,
        accionBoton=() => {console.log(`Botón presionado`)} 
    }
){

    return <li>{textoTarea} <button onClick={accionBoton}>Completar</button></li>;
}