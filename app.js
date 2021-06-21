var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var app = express();


//*le vamos a decir que vamos a usar JSON
app.use(express.json());
app.use(cors());

//TODO: config conexion Base datos
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'articulosdb'
});

// TODO: probamos la conexion
conexion.connect(function(error){
    if (error) {
        throw error;
    } else {
        console.log("Conexion exitosa a la base de datos!");
    }
});

//! GET/PUSH  mostrar todos los articulos
app.get('/api/articulos2' , (req , res)=>{

   conexion.query('SELECT * FROM articulos2', (error,filas)=>{
        if (error) {
            throw error;
        } else {
            res.send(filas);
            //console.log(filas);
        }
    })
});

//! Mostrar SOLO UN articulo
app.get('/api/articulos2/:id' , (req , res)=>{

    conexion.query('SELECT * FROM articulos2 WHERE id = ?', [req.params.id] ,(error,fila)=>{
         if (error) {
             throw error;
         } else {
             res.send(fila);
             //res.send(fila[0].descripcion);
         }
     })
 });

 //! POST - para ingresar nuevos datos en la Base de datos
app.post('/api/articulos2' , (req , res)=>{
    let data = {cp:req.body.cp,equipo:req.body.equipo,marca:req.body.marca,modelo:req.body.modelo,serie:req.body.serie,ubicacion:req.body.ubicacion};
    let sql = "INSERT INTO articulos2 SET ?"
    conexion.query(sql, data, function(error,results){
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

//!PUT - Editar un articulo
app.put('/api/articulos2/:id', (req,res)=>{
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let sql = "UPDATE articulos2 SET descripcion = ?, precio = ?, stock = ? WHERE id = ?";

    conexion.query(sql,[descripcion,precio,stock,id], function(error,results){
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

//! DELETE - para eliminar articulos
app.delete('/api/articulos2/:id', (req,res)=>{
    conexion.query('DELETE FROM articulos2 WHERE id = ?', [req.params.id], function(error,filas){
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});


// ?para visualizar un mensaje en la web
app.get('/' , function(req , res){
    res.send('hello from simple server :)')
});

//?para visualizar un mensaje en la Consola
//?setting
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});



