import './App.css'
import ListaDeTareasComponent from './components/ListaDeTareasComponent.jsx'

function App() {

  return (
    <>
      <ListaDeTareasComponent titulo='Trabajo' descripcion='Aquí vienen las tareas del trabajo' />
      <ListaDeTareasComponent titulo='Hogar' />
      <ListaDeTareasComponent titulo='Escuela' />
      <ListaDeTareasComponent titulo='Mascotas' />
    </>
  )
}

export default App
