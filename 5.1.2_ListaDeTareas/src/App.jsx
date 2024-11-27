import './App.css'
import ListaDeTareasComponent from './components/ListaDeTareasComponent.jsx'

function App() {

  return (
    <>
      <ListaDeTareasComponent titulo='Trabajo' />
      <ListaDeTareasComponent titulo='Hogar' />
      <ListaDeTareasComponent titulo='Escuela' />
      <ListaDeTareasComponent />
    </>
  )
}

export default App
