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
        oculto(consultaIng);
        oculto(consultaGast);
        oculto(consultaCol);
        console.log("ingresos esta visible y se ocultan los gastos y el colchon")
        break;
  
        case gastos:

        oculto(ingresos);
        oculto(colchon);
        oculto(consultaIng);
        oculto(consultaGast);
        oculto(consultaCol);
        console.log("gastos esta visible y se ocultan los ingresos y el colchon")
        break;
        case colchon:
            oculto(ingresos);
            oculto(gastos);
            oculto(consultaIng);
            oculto(consultaGast);
            oculto(consultaCol);
            console.log("colchon esta visible y se ocultan los ingresos y los gastos")
            break;

        case consultaIng:
            oculto(ingresos);
            oculto(gastos);
            oculto(colchon);
            oculto(consultaGast);
            oculto(consultaCol);
            break;
        case consultaGast:
            oculto(ingresos);
            oculto(colchon);
            oculto(gastos);
            oculto(consultaIng);
            oculto(consultaCol);
            break;
        case consultaCol:
            oculto(ingresos);
            oculto(gastos);
            oculto(colchon);
            oculto(consultaIng);
            oculto(consultaGast);
            break;
    default:
        oculto(ingresos);
        oculto(gastos);
        oculto(colchon);
        oculto(consultaIng);
        oculto(consultaGast);
        oculto(consultaCol);
        break;
  }
  
  
}
$('#yourId').jalendar({color: '#fff',
type: 'linker',
customUrl: 'http://yourcustomurl.com/yourcustomurl?var=',
dateType: 'mm-dd-yyyy',
titleColor: '#666',
weekColor: '#EA5C49',
todayColor: '#EA5C49'});
  
 



