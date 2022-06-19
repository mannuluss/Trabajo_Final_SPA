const path = require("path");
const pathENV = process.argv[2] ? process.argv[2] : '.env';
require("dotenv").config({ path: path.resolve(process.cwd(), pathENV) });

const express = require('express');
const app = express();
const cors = require("cors")
const winston = require('winston')
const expressWinston = require('express-winston');


//settings
port = process.env.PORT || 3000;
app.set('port', port);

app.use(cors())
app.use(express.json());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}))

//rutas (Routes)
app.use(require('./routes/getuser'));

//iniciando el servidor
app.listen(app.get('port'),
    () => console.log('server on port ', app.get('port'))
);