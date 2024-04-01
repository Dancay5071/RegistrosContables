window.onload;
let hoy = document.getElementById('hoy');

let ingresos = document.getElementById('ingresos');
let gastos = document.getElementById('gastos');
let colchon = document.getElementById('colchon');



function fecha() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    let fechaCompleta = dia + '/' + mes + '/' + anio;
    hoy.innerHTML = "Dia de hoy : " + fechaCompleta;
}
fecha();

function oculto(elem){
    elem.style.visibility = 'hidden';
  }
function visible(elem){
    elem.style.visibility = 'visible'
   
  switch (elem) {
    case ingresos:

         oculto(gastos);
        oculto(colchon);
        console.log("ingresos esta visible y se ocultan los gastos y el colchon")
        break;
  
        case gastos:

        oculto(ingresos);
        oculto(colchon)
        console.log("gastos esta visible y se ocultan los ingresos y el colchon")
        break;
        case colchon:
            oculto(ingresos);
            oculto(gastos)
            console.log("colchon esta visible y se ocultan los ingresos y los gastos")
            break;
    default:
        oculto(ingresos);
        oculto(gastos);
        oculto(colchon)
  }
  
  
}

  
 



