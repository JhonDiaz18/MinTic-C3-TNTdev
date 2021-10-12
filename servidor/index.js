const express = require('express'); 
const app = express(); 
const {dbConnection} = require('./database/config');
require('dotenv').config();
dbConnection();

app.use(express.static('public'));
app.use(express.json());

/**RUTAS */
app.use('/api/tnt',require('./routes/tnt'));
app.use('/api/productos',require('./routes/productos'));
app.use('/api/ventas',require('./routes/ventas'));

/**Escuchar peticiones */
app.listen(process.env.Port,()=>{  
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`);
});
