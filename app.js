// ***** Require's ***** //
const { log } = require('console');
const exp = require('constants');
const express = require('express');
const path = require('path');

// ***** Express execution ***** //
const app = express();

// ***** Static resources ***** //

app.use(express.static('public'));
// const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

// ***** EJS View Engine Setup ***** //
app.set('view engine', 'ejs');

// ***** Route System require and use() ***** //

const mainRoutes = require('./routes/mainRoutes');

app.use('/', mainRoutes);


// ***** Express server ***** //
app.listen(3217, () => console.log('Servidor en linea en puerto 3217'));