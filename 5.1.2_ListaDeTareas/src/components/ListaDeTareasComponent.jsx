import ListaDesordenadaComponent from "./ListaDesordenadaComponent";
import CabeceraListaTareasComponent from "./CabeceraListaTareasComponent";

// 1. Crear la función del componente.
function ListaDeTareasComponent({ titulo='Lista de tareas' }) {

    /*
    Recordatorio de la destructuración.
    let persona = {
        nombre: 'Pedro',
        apellido: 'Pérez',
        edad: 35
    };

    let nombre = persona.nombre;
    let apellido = persona.apellido;
    let edad = persona.edad;

    let {edad, apellido, nombre} = persona;   
    */ 

    // 2. Agregar el return con lo que queremos ver en pantalla
    return (
        <>
            <CabeceraListaTareasComponent titulo={titulo} />
            <ListaDesordenadaComponent />
        </>
    );
}

export default ListaDeTareasComponent;