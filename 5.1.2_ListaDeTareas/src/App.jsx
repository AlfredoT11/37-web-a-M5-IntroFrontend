import './App.css'

function App() {

  return (
    <>
      <h1>Lista de pendientes</h1>
      <label>Tarea: </label><input type='text'/>
      <button>Agregar tarea</button>

      <ul>
        <li>Limpiar cajas de arena <button>Tarea completada</button></li>
        <li>Comprar jitomates <button>Tarea completada</button></li>
        <li>Mandar factura <button>Tarea completada</button></li>
      </ul>
    </>
  )
}

export default App
