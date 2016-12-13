
// NOTA : I COMMENTI SAREBBERO UGUALI PER OGNI GIORNO DELLA SETTIMANO ED E' INUTILE FARTLI 


// VARIABILE PER SAPERE SE I CAMPI SELECT SONO VISIBILI O MENO
lunedi_visibile = false;

/**
 * @brief FUNZIONE CHE SETTA I VALORI DI LUNEDI A NIENTE.
 */

function reset_lunedi()
{
    document.getElementById("lunedi_primo").value = "NIENTE";
    document.getElementById("lunedi_secondo").value = "NIENTE";
    document.getElementById("lunedi_contorno").value = "NIENTE";
    document.getElementById("lunedi_dessert").value = "NIENTE";
}

/**
 * @brief  FUNZIONE CHE FA CONPARIRE E SCOMPARIRE I SELECT DEL LUNEDI E CHIAMA RESET_LUNEDI
 */

function lunedi_visibile_invisibile()
{
    if(lunedi_visibile)
    {
        lunedi.style.display ='none';
        lunedi_visibile = false;
    }
    else
    {
        lunedi.style.display ='block';
        lunedi_visibile = true;
    }
    
    reset_lunedi();
}



martedi_visibile = false;


function reset_martedi()
{
    document.getElementById("martedi_primo").value = "NIENTE";
    document.getElementById("martedi_secondo").value = "NIENTE";
    document.getElementById("martedi_contorno").value = "NIENTE";
    document.getElementById("martedi_dessert").value = "NIENTE";
}


function martedi_visibile_invisibile()
{
    if(martedi_visibile)
    {
        martedi.style.display ='none';
        martedi_visibile = false;
    }
    else
    {
        martedi.style.display ='block';
        martedi_visibile = true;
    }
    
    reset_martedi();
}




mercoledi_visibile = false;


function reset_mercoledi()
{
    document.getElementById("mercoledi_primo").value = "NIENTE";
    document.getElementById("mercoledi_secondo").value = "NIENTE";
    document.getElementById("mercoledi_contorno").value = "NIENTE";
    document.getElementById("mercoledi_dessert").value = "NIENTE";
}


function mercoledi_visibile_invisibile()
{
    if(mercoledi_visibile)
    {
        mercoledi.style.display ='none';
        mercoledi_visibile = false;
    }
    else
    {
        mercoledi.style.display ='block';
        mercoledi_visibile = true;
    }
    
    reset_mercoledi();
}




giovedi_visibile = false;


function reset_giovedi()
{
    document.getElementById("giovedi_primo").value = "NIENTE";
    document.getElementById("giovedi_secondo").value = "NIENTE";
    document.getElementById("giovedi_contorno").value = "NIENTE";
    document.getElementById("giovedi_dessert").value = "NIENTE";
}


function giovedi_visibile_invisibile()
{
    if(giovedi_visibile)
    {
        giovedi.style.display ='none';
        giovedi_visibile = false;
    }
    else
    {
        giovedi.style.display ='block';
        giovedi_visibile = true;
    }
    
    reset_giovedi();
}




venerdi_visibile = false;


function reset_venerdi()
{
    document.getElementById("venerdi_primo").value = "NIENTE";
    document.getElementById("venerdi_secondo").value = "NIENTE";
    document.getElementById("venerdi_contorno").value = "NIENTE";
    document.getElementById("venerdi_dessert").value = "NIENTE";
}


function venerdi_visibile_invisibile()
{
    if(venerdi_visibile)
    {
        venerdi.style.display ='none';
        venerdi_visibile = false;
    }
    else
    {
        venerdi.style.display ='block';
        venerdi_visibile = true;
    }
    
    reset_venerdi();
}





sabato_visibile = false;


function reset_sabato()
{
    document.getElementById("sabato_primo").value = "NIENTE";
    document.getElementById("sabato_secondo").value = "NIENTE";
    document.getElementById("sabato_contorno").value = "NIENTE";
    document.getElementById("sabato_dessert").value = "NIENTE";
}


function sabato_visibile_invisibile()
{
    if(sabato_visibile)
    {
        sabato.style.display ='none';
        sabato_visibile = false;
    }
    else
    {
        sabato.style.display ='block';
        sabato_visibile = true;
    }
    
    reset_sabato();
}




domenica_visibile = false;


function reset_domenica()
{
    document.getElementById("domenica_primo").value = "NIENTE";
    document.getElementById("domenica_secondo").value = "NIENTE";
    document.getElementById("domenica_contorno").value = "NIENTE";
    document.getElementById("domenica_dessert").value = "NIENTE";
}


function domenica_visibile_invisibile()
{
    if(domenica_visibile)
    {
        domenica.style.display ='none';
        domenica_visibile = false;
    }
    else
    {
        domenica.style.display ='block';
        domenica_visibile = true;
    }
    
    reset_domenica();
}
