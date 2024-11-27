import ElementoliComponent from './ElementoliComponent';

export default function ListaDesordenadaComponent({accionElementoLi}) {

    return (
        <ul>
            <ElementoliComponent accionBoton={accionElementoLi}/>
            <ElementoliComponent accionBoton={accionElementoLi}/>
            <ElementoliComponent/>
        </ul>
    );
}