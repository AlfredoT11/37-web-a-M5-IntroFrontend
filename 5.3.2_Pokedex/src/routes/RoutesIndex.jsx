import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AcercaDe from '../pages/AcercaDe';
import DetallePokemon from '../pages/DetallePokemon';

function RoutesIndex(){

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/acercaDe' element={<AcercaDe />} />
            <Route path='/pokemon/:nombrePokemon/:id' element={<DetallePokemon />}></Route>
        </Routes>
    )

}

export default RoutesIndex;