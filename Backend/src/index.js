const express = require('express');
const app = express();


//settings
port = 3000;
app.set('port', process.env.PORT || 3000);


//funciones antes de recivir algo en las rutas
app.use(express.json());

//rutas (Routes)
app.use(require('./routes/getuser'));

//iniciando el servidor
app.listen(app.get('port'), 
() => console.log('server on port ', app.get('port'))
);