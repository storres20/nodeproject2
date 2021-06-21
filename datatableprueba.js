$(document).ready(function() {
    $("#example").DataTable();
} );


/*Array de Objetos... por lo general esto se obtiene desde una API
Se esta simulando el JSON obtenido desde la API*/

const productos = [
    {"cp": 5322001, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"12345","ubicacion":"emergencia"},
    {"cp": 5322002, "equipo": "ecografo","marca":"samsung","modelo":"s6","serie":"abc123","ubicacion":"ginecologia"},
    {"cp": 5322003, "equipo": "rayos x","marca":"apelem","modelo":"ultra","serie":"xyz456","ubicacion":"imagenes"},
    {"cp": 5322004, "equipo": "monitor fetal","marca":"bistos","modelo":"gemelar","serie":"fet123","ubicacion":"emergencia"},
    {"cp": 5322005, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"789000","ubicacion":"ginecologia"},
    {"cp": 5322006, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"qwer123","ubicacion":"emergencia"},
    {"cp": 5322007, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"777asd","ubicacion":"emergencia"},
    {"cp": 5322008, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"hjk999","ubicacion":"emergencia"},
    {"cp": 5322009, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"cvb111","ubicacion":"emergencia"},
    {"cp": 5322010, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"645ert","ubicacion":"emergencia"},
    {"cp": 5322011, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"88iuy","ubicacion":"emergencia"},
    {"cp": 5322012, "equipo": "monitor","marca":"mindray","modelo":"beneview t5","serie":"123xyz","ubicacion":"consulta"}
];

/*const resultado = document.querySelector('#resultado');

resultado.innerHTML = '';

for (const producto of productos) {
    resultado.innerHTML += `
        <tr>
            <td>${producto.cp}</td>
            <td>${producto.equipo}</td>
            <td>${producto.marca}</td>
            <td>${producto.modelo}</td>
            <td>${producto.serie}</td>
            <td>${producto.ubicacion}</td>
        </tr>
    `
}*/

//vamos a practicar con el boton "mostrar todo" para que muestre el contenido de la tabla al dar click

const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado'); //apunto al "tbody"

//funcion FLECHA para crear una funcion llamada FILTRAR, el cual va a usar el array de objetos de PRODUCTOS y lo va a plasmar en la seccion de HTML "tbody"

const filtrar = () => {
    resultado.innerHTML = '';

for (const producto of productos) {
    resultado.innerHTML += `
        <tr>
            <td>${producto.cp}</td>
            <td>${producto.equipo}</td>
            <td>${producto.marca}</td>
            <td>${producto.modelo}</td>
            <td>${producto.serie}</td>
            <td>${producto.ubicacion}</td>
        </tr>
    `
}

}

//crearemos un EVENTO que escuche cuando se da click en el boton "mostrar todo" y que ejecute la funcion FILTRAR

boton.addEventListener('click',filtrar);
filtrar();

