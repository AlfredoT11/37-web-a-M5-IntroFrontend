function CabeceraListaTareasComponent({ titulo='Titulo provisional' }) {

    return (
        <>
            <h1>{titulo}</h1>
            <label>Tarea: </label><input type='text' />
            <button onClick={agregarTarea}>Agregar tarea</button>
        </>
    );
}

export default CabeceraListaTareasComponent;