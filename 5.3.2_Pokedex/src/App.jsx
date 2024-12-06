import { useEffect } from 'react'
import './App.css'
import ContadorSaludosComponent from './components/ContadorSaludosComponent'

function App() {

  useEffect(() => {
    console.log('Pokédex');
  }, []);

  return (
    <>
      <ContadorSaludosComponent />
    </>
  )
}

export default App
