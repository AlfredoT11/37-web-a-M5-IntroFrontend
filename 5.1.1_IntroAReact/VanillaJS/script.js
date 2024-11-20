// Utilizar y manipular el DOM

function agregarSeccion(tituloTexto, parrafoTexto){
    // Creamos un elemento div
    let divSeccion = document.createElement('div');

    // Creamos un elemento h1
    let titulo = document.createElement('h1');
    // Especificamos el texto del h1
    titulo.appendChild(document.createTextNode(tituloTexto));

    let lineaHorizontal = document.createElement('hr');

    let parrafo = document.createElement('p');
    parrafo.appendChild(document.createTextNode(parrafoTexto));

    // Agregamos los 3 elementos al div que creamos.
    divSeccion.append(titulo, lineaHorizontal, parrafo);

    // Agregamos el div se la sección a nuestro div de raíz
    document.getElementById('root').appendChild(divSeccion);
}

let informacion = [
    {   
        titulo: 'Gato',
        texto: 'Un gato es un mamífero de 4 patas, con orejas y ojos bonitos y tiernos.'
    },
    {   
        titulo: 'Perro',
        texto: 'Un perro es un mamífero de 4 patas muy fiel y leal.'
    },
    {   
        titulo: 'Axolote',
        texto: 'Un axolote es un animal de agua muy tierno y especial en Xochimilco.'
    },  
]

informacion.forEach((elemento) => {
    agregarSeccion(elemento.titulo, elemento.texto);
});

for(let i = 0; i < informacion.length; i++){
    agregarSeccion(informacion[i].titulo, informacion[i].texto);
}
