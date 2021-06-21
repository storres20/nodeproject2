const guardarNuevo = document.querySelector('#guardarNuevo');


const btnAdd = () => {

    const cp = document.querySelector('#cp').value;
    const equipo = document.querySelector('#equipo').value;
    const marca = document.querySelector('#marca').value;
    const modelo = document.querySelector('#modelo').value;
    const serie = document.querySelector('#serie').value;
    const ubicacion = document.querySelector('#ubicacion').value;

    console.log(cp);
    console.log(equipo);
    console.log(ubicacion);

    let url = 'http://localhost:3000/api/articulos2';
    let data = "cp:" + cp + ",equipo:"+ equipo+",marca:"+marca+",modelo:"+modelo+",serie:"+serie+",ubicacion:"+ubicacion;     // { x: 5, y: 6 } // {username: 'example'}

    console.log(data);
    //let data1 = JSON.parse(data);
    //let data1 = JSON.stringify(data);
    //console.log(data1);
    const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
    console.log(obj);


    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}



guardarNuevo.addEventListener('click', btnAdd);