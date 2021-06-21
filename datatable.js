
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

    const btnGet = () => {
            fetch('http://localhost:3000/api/articulos2')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    //dataJson = data;

                    resultado.innerHTML = ``;
                    const texto = formulario.value.toLowerCase();
                    console.log(texto);

        if (texto !== "") {

            for (const dat of data) {

                //let cp = dat.cp.toString();
                let cp = dat.cp.toLowerCase();
                //console.log(cp);
                let equipo = dat.equipo.toLowerCase();
                let marca = dat.marca.toLowerCase();
                let modelo = dat.modelo.toLowerCase();
                let serie = dat.serie.toLowerCase();
                let ubicacion = dat.ubicacion.toLowerCase();

                if (cp.indexOf(texto) !== -1) {

                    resultado.innerHTML += `
                    <tr>
                        <td>${dat.cp}</td>
                        <td>${dat.equipo}</td>
                        <td>${dat.marca}</td>
                        <td>${dat.modelo}</td>
                        <td>${dat.serie}</td>
                        <td>${dat.ubicacion}</td>
                        <td>
                        <button class="btn btn-warning" id="botonEdit" data-bs-toggle="modal" data-bs-target="#modalEdicion"><i class="bi bi-pencil"></i></button>

                        <button class="btn btn-danger trash" id="botonDelete"><i class="bi bi-trash"></i></button> </td>
                    </tr>
                    `
                }
                if (equipo.indexOf(texto) !== -1) {

                    resultado.innerHTML += `
                    <tr>
                        <td>${dat.cp}</td>
                        <td>${dat.equipo}</td>
                        <td>${dat.marca}</td>
                        <td>${dat.modelo}</td>
                        <td>${dat.serie}</td>
                        <td>${dat.ubicacion}</td>
                        <td>
                        <button class="btn btn-warning" id="botonEdit" data-bs-toggle="modal" data-bs-target="#modalEdicion"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger trash" id="botonDelete"><i class="bi bi-trash"></i></button> </td>
                    </tr>
                    `
                }
                if (marca.indexOf(texto) !== -1) {

                    resultado.innerHTML += `
                    <tr>
                        <td>${dat.cp}</td>
                        <td>${dat.equipo}</td>
                        <td>${dat.marca}</td>
                        <td>${dat.modelo}</td>
                        <td>${dat.serie}</td>
                        <td>${dat.ubicacion}</td>
                        <td>
                        <button class="btn btn-warning" id="botonEdit" data-bs-toggle="modal" data-bs-target="#modalEdicion"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger trash" id="botonDelete"><i class="bi bi-trash"></i></button> </td>
                    </tr>
                    `
                }
                if (modelo.indexOf(texto) !== -1) {

                    resultado.innerHTML += `
                    <tr>
                        <td>${dat.cp}</td>
                        <td>${dat.equipo}</td>
                        <td>${dat.marca}</td>
                        <td>${dat.modelo}</td>
                        <td>${dat.serie}</td>
                        <td>${dat.ubicacion}</td>
                        <td>
                        <button class="btn btn-warning" id="botonEdit" data-bs-toggle="modal" data-bs-target="#modalEdicion"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger trash" id="botonDelete"><i class="bi bi-trash"></i></button> </td>
                    </tr>
                    `
                }
                if (serie.indexOf(texto) !== -1) {

                    resultado.innerHTML += `
                    <tr>
                        <td>${dat.cp}</td>
                        <td>${dat.equipo}</td>
                        <td>${dat.marca}</td>
                        <td>${dat.modelo}</td>
                        <td>${dat.serie}</td>
                        <td>${dat.ubicacion}</td>
                        <td>
                        <button class="btn btn-warning" id="botonEdit" data-bs-toggle="modal" data-bs-target="#modalEdicion"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger trash" id="botonDelete"><i class="bi bi-trash"></i></button> </td>
                    </tr>
                    `
                }
                if (ubicacion.indexOf(texto) !== -1) {

                    resultado.innerHTML += `
                    <tr>
                        <td>${dat.cp}</td>
                        <td>${dat.equipo}</td>
                        <td>${dat.marca}</td>
                        <td>${dat.modelo}</td>
                        <td>${dat.serie}</td>
                        <td>${dat.ubicacion}</td>
                        <td>
                        <button class="btn btn-warning" id="botonEdit" data-bs-toggle="modal" data-bs-target="#modalEdicion"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger trash" id="botonDelete"><i class="bi bi-trash"></i></button> </td>
                    </tr>
                    `
                }
            }

            if (resultado.innerHTML === ``) {
                resultado.innerHTML += `
                    <li>Producto no encontrado...</li>
                `
                }

            } else {
                //alert("Ingrese un valor");
                //alertify.alert('Ready!');
                swal("Ingrese un valor!", "Ejm: ecografo", "warning"); //cdn sweetAlert
                //swal("Atencion!", "warning");
            }
            }
            )
        };


        boton.addEventListener('click', btnGet);
        //formulario.addEventListener('keyup', filtrar);
        //btnGet();

