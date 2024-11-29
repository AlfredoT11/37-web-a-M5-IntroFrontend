export default function ElementoliComponent(
    { 
        textoTarea,
        accionBoton=() => {console.log(`Botón presionado`)},
        valorIndice
    }
){

    return <li>{textoTarea} <button onClick={() => accionBoton(valorIndice)}>Completar</button></li>;
}