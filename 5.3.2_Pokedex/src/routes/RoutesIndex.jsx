import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AcercaDe from '../pages/AcercaDe';

function RoutesIndex(){

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/acercaDe' element={<AcercaDe />} />
        </Routes>
    )

}

export default RoutesIndex;