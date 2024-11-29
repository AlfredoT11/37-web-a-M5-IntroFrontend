import './App.css'
import ListaDeTareasComponent from './components/ListaDeTareasComponent.jsx'

function App() {

  return (
    <>
      <ListaDeTareasComponent titulo='Trabajo' ejecutarContador={false} />
      <ListaDeTareasComponent titulo='Hogar' />
      <ListaDeTareasComponent titulo='Escuela' />
      <ListaDeTareasComponent titulo='Escuela de música' />

      <ListaDeTareasComponent />
    </>
  )
}

export default App
