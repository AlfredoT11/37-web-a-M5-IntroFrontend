// 1. Crear la función del componente.
function ListaDeTareasComponent(props) {

    console.log(props);

    // 2. Agregar el return con lo que queremos ver en pantalla
    return (
        <>
            <h1>Lista de pendientes</h1>
            <label>Tarea: </label><input type='text' />
            <button>Agregar tarea</button>

            <ul>
                <li>Limpiar cajas de arena <button>Tarea completada</button></li>
                <li>Comprar jitomates <button>Tarea completada</button></li>
                <li>Mandar factura <button>Tarea completada</button></li>
            </ul>
        </>
    );
}

export default ListaDeTareasComponent;