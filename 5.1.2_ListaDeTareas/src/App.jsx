import './App.css'
import ListaDeTareasComponent from './components/ListaDeTareasComponent.jsx'
import CabeceraListaTareasComponent from './components/CabeceraListaTareasComponent.jsx'

function App() {

  return (
    <>
      <ListaDeTareasComponent titulo='Trabajo' />
      <ListaDeTareasComponent titulo='Hogar' />
      <ListaDeTareasComponent titulo='Escuela' />
      <ListaDeTareasComponent />
      <CabeceraListaTareasComponent />
    </>
  )
}

export default App
