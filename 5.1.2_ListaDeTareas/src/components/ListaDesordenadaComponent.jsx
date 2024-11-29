import ElementoliComponent from './ElementoliComponent';

export default function ListaDesordenadaComponent({ accionElementoLi, tareas }) {

    /*
    ['Lavar ropa', 'Limpiar cajas de arena', 'Cocinar']
    map()
    'Lavar ropa' -> <ElementoliComponent textoTarea={'Lavar ropa'}></ElementoliComponent>
    'Limpiar cajas de arena' -> <ElementoliComponent textoTarea={'Limpiar cajas de arena'}></ElementoliComponent>
    'Cocinar' ->  <ElementoliComponent textoTarea={'Limpiar cajas de arena'}></ElementoliComponent>
    */

    return (
        <ul>
            { /* La función map de abajo convierte el arreglo (de cadenas) tareas a un arreglo de elementoz <ElementliComponent> */}
            {tareas.map((tarea, index) => <ElementoliComponent
                key={index}
                valorIndice={index}
                textoTarea={tarea}
                accionBoton={accionElementoLi}>
            </ElementoliComponent>)}
        </ul>
    );
}

/*
// Definición de la función.
function suma(a, b){
    return a+b;
}

// Referencia a la función.
suma

// Llamada a función
suma(5, 2);
*/