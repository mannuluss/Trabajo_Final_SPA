const express =  require('express');
const router = express.Router();

//se crean los url
const mysqlConnection = require('../database');

// Read Usuario
router.get('/', (req,res) => {
    mysqlConnection.query('CALL GetPersonas', (err,rows , fields) => {
        if (err){
            console.log('ha ocurrido un error');
            console.log(err);
        }else{
            res.setHeader('Access-Control-Allow-Origin','*');//Ultimamente este error es muy frecuente 
            res.json(rows[0]);
        }
    });
})

//Read determinado usuario
router.get('/usuario/:id',(req,res) =>{ 
    const reqid = req.params.id;
    mysqlConnection.query('CALL Getpersona(?)',[reqid], (err,rows,fields) => {
        if (err){
            console.log('ha ocurrido un error');
            console.log(err);
        }else{
            //console.log(rows[0]);
            res.setHeader('Access-Control-Allow-Origin','*');
            console.log(rows[0]);
            res.json(rows[0][0]);
        }
    })

})

router.get('/ciudad',(req,res) =>{ 
    mysqlConnection.query('SELECT * FROM ciudad', (err,rows,fields) => {
        if (err){
            console.log('ha ocurrido un error');
            console.log(err);
        }else{
            console.log('peticion a /ciudad/')
            res.setHeader('Access-Control-Allow-Origin','*');
            res.json(rows);
        }
    })

})

router.get('/tipo',(req,res) =>{ 
    mysqlConnection.query('SELECT * FROM tipodocumento', (err,rows,fields) => {
        if (err){
            console.log('ha ocurrido un error');
            console.log(err);
        }else{
            console.log('peticion a /tipo')
            res.setHeader('Access-Control-Allow-Origin','*');
            res.json(rows);
        }
    })

})

//update usuario
router.post('/update/', (req,res) =>{ 
    const {id,
        nombres,
        apellidos,
        idtipodocumento,
        documento,
        residencia,
        nacimiento,
        email,
        telefono,
        usuario,
        clave} = req.body;
    console.log(req.body);
    consulta = 'call updatepersona(?,?,?,?,?,?,?,?,?,?,?)';

    mysqlConnection.query(consulta, 
        [id,
            nombres,
            apellidos,
            idtipodocumento,
            documento,
            residencia,
            nacimiento,
            email,
            telefono,
            usuario,
            clave],    
        (err,rows,fields) => {
        if (err){
            console.log(err);
        }else{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.json({Status: 'Update success'});
            console.log("update success");
        }
    
    });

    
    //const query = ('CALL crearpersona(?,?,)',[]);
});

//agregar usuario
router.post('/create/', (req,res) =>{ 
    const {id,
        nombres,
        apellidos,
        idtipodocumento,
        documento,
        residencia,
        nacimiento,
        email,
        telefono,
        usuario,
        clave} = req.body;
    console.log(req.body);
    consulta = 'CALL crearpersona(?,?,?,?,?,?,?,?,?,?)';
    mysqlConnection.query(consulta, 
        [nombres,
            apellidos,
            idtipodocumento,
            documento,
            residencia,
            nacimiento,
            email,
            telefono,
            usuario,
            clave],    
        (err,rows,fields) => {
        if (err){
            console.log(err);
        }else{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.json({Status: 'Create success'});
            console.log("Create success");
        }
    
    });
});

//delete usuario
router.delete('/delete/:id', (req, res)=>{
    id = req.params.id;
    mysqlConnection.query( 'CALL DeletePersona(?)',[id] ,(err,rows,fields)=>{
            if (err){
                console.log(err);
            }else{
                res.setHeader('Access-Control-Allow-Origin','*');
                res.json({Status: 'Delete success'});
                console.log("Delete success");
            }
        });
});

module.exports = router;