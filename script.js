window.onload;
let hoy = document.getElementById('hoy');

let montoActual = document.getElementById('montoActual');

let gastoTotal = document.getElementById('gastoTotal');
let gastoFijo = document.getElementById('gastoFijo');
let gastoDiario = document.getElementById('gastoDiario');
let gastoExtra = document.getElementById('gastoExtra');

let ingreso = document.getElementById('ingreso');

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
