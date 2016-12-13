
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


/**
 * @brief RESTITUISCE LA PAGINA CONFERMA ORDINE
 */
app.get('/conferma_ordine',function(req,res)
{
    res.sendFile(__dirname + '/conferma_ordine.html'); 
});


/**
 * @brief RESTITUISCE LA PAGINA ORDINE VUOTO
 */
app.get('/ordine_vuoto',function(req,res)
{
    res.sendFile(__dirname + '/ordine_vuoto.html'); 
});


///////////////////////////////////////////////////////////////////////////////


// DICHIARAZIONI VARIABILI 

var lunedi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var martedi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var mercoledi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var giovedi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var venerdi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var sabato =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var domenica =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

///////////////////////////////////////////////////////////////////////////////////////////////


// BOOLEANO PER SAPERE SE E' STATO INVIATO UN ORDINE
var pasto_odinato = false; 


/**
 * @brief RESTITUISCE LA PAGINA CONFERMA ORDINE E RICEVE I PASTI E LE SALVA NELLE VARIABILI GLOBALI
 */

app.post('/invio_ordine',function(req,res)
{
    pasto_odinato = true;   
    
    //LUNEDI
    lunedi.primo = req.body.lunedi_primo;
    lunedi.secondo = req.body.lunedi_secondo;
    lunedi.contorno = req.body.lunedi_contorno;
    lunedi.dessert = req.body.lunedi_dessert;
    
    //MARTEDI 
    martedi.primo = req.body.martedi_primo;
    martedi.secondo = req.body.martedi_secondo;
    martedi.contorno = req.body.martedi_contorno;
    martedi.dessert = req.body.martedi_dessert;
    
    //MERCOLEDI
    mercoledi.primo = req.body.mercoledi_primo;
    mercoledi.secondo = req.body.mercoledi_secondo;
    mercoledi.contorno = req.body.mercoledi_contorno;
    mercoledi.dessert = req.body.mercoledi_dessert;
    
    //GIOVEDI
    giovedi.primo = req.body.giovedi_primo;
    giovedi.secondo = req.body.giovedi_secondo;
    giovedi.contorno = req.body.giovedi_contorno;
    giovedi.dessert = req.body.giovedi_dessert;
    
    //VENERDI
    venerdi.primo = req.body.venerdi_primo;
    venerdi.secondo = req.body.venerdi_secondo;
    venerdi.contorno = req.body.venerdi_contorno;
    venerdi.dessert = req.body.venerdi_dessert;
    
    //SABATO
    sabato.primo = req.body.sabato_primo;
    sabato.secondo = req.body.sabato_secondo;
    sabato.contorno = req.body.sabato_contorno;
    sabato.dessert = req.body.sabato_dessert;
    
    //DOMENICA
    domenica.primo = req.body.domenica_primo;
    domenica.secondo = req.body.domenica_secondo;
    domenica.contorno = req.body.domenica_contorno;
    domenica.dessert = req.body.domenica_dessert;
    
    
    //PER CONTROLLARE SE E' UN ORDINE VUOTO
    if(
        lunedi.primo == "NIENTE" && lunedi.secondo == "NIENTE" &&
        lunedi.contorno == "NIENTE" && lunedi.dessert == "NIENTE" &&
        
        martedi.primo == "NIENTE" && martedi.secondo == "NIENTE" &&
        martedi.contorno == "NIENTE" && martedi.dessert == "NIENTE" &&
        
        mercoledi.primo == "NIENTE" && mercoledi.secondo == "NIENTE" &&
        mercoledi.contorno == "NIENTE" && mercoledi.dessert == "NIENTE" &&
        
        giovedi.primo == "NIENTE" && giovedi.secondo == "NIENTE" &&
        giovedi.contorno == "NIENTE" && giovedi.dessert == "NIENTE" &&
        
        venerdi.primo == "NIENTE" && venerdi.secondo == "NIENTE" &&
        venerdi.contorno == "NIENTE" && venerdi.dessert == "NIENTE" &&
        
        sabato.primo == "NIENTE" && sabato.secondo == "NIENTE" &&
        sabato.contorno == "NIENTE" && sabato.dessert == "NIENTE" &&
        
        domenica.primo == "NIENTE" && domenica.secondo == "NIENTE" &&
        domenica.contorno == "NIENTE" && domenica.dessert == "NIENTE"
      )
    {
        pasto_odinato = false;
        res.sendFile(__dirname + '/ordine_vuoto.html');     
    }
    
    
    //console log per vericare che i valori dei pasti
    
    console.log(lunedi);
    console.log("");
    console.log(martedi);
    console.log("");
    console.log(mercoledi);
    console.log("");
    console.log(giovedi);
    console.log("");
    console.log(venerdi);
    console.log("");
    console.log(sabato);
    console.log("");
    console.log(domenica);
    console.log("");
    
    console.log("/////////////////////////////////////////////////////////////////////");

    
    res.sendFile(__dirname + '/conferma_ordine.html'); 
});


//////////////////////////////////////////////////////////////////////////////////////////////


//INFORMARE L'UTENTE DELLA PORTA CHE SI UTILIZZA E DELL'URL DELLA PAGINA DI LOGIN

app.listen(app.get('port'), function()           
{
    console.log('Node app is running on port', app.get('port'));
    console.log('Server running at http://127.0.0.1:1338/home');   
});

