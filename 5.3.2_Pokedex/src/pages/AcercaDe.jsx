import { NavLink } from "react-router-dom";

function AcercaDe(){
    return(
        <>
            <h1>Acerca de esta aplicación</h1>
            <p>Esta aplicación fue desarrollada como parte del módulo 5 Intro a Frontend de DEV.F</p>
            <NavLink to='/'>Página principal</NavLink>
        </>
    )
}

export default AcercaDe;