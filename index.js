
//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//POST
var bodyParser = require('body-parser');

// PER INCLUDERE I FILE CSS E IL FILE SCRIPT.JS
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ extended: false }));

//IMPOSTATA LA PORTA
app.set('port', (process.env.PORT || 1338));


/**
 * @brief RESTITUISCE LA PAGINA HOME
 */
app.get('/home',function(req,res)
{
    res.sendFile(__dirname + '/home.html'); 
});


/**
 * @brief RESTITUISCE LA PAGINA AIUTO
 */
app.get('/aiuto',function(req,res)
{
    res.sendFile(__dirname + '/aiuto.html');
});


/**
 * @brief RESTITUISCE LA PAGINA ORDINA
 */
app.get('/ordina',function(req,res)
{
    res.sendFile(__dirname + '/ordina.html'); 
});



//INFORMARE L'UTENTE DELLA PORTA CHE SI UTILIZZA E DELL'URL DELLA PAGINA DI LOGIN

app.listen(app.get('port'), function()           
{
    console.log('Node app is running on port', app.get('port'));
    console.log('Server running at http://127.0.0.1:1338/home');   
});

