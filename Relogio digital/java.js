
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();

    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    horas.textContent = hour;
    minutos.textContent = minute;
    segundos.textContent = second;
});



    










