function calcular() {

    let cm = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(cm)) {
        alert("Ingresa una cantidad en centímetros");
        return;
    }

    let mm = cm * 10;
    let m = cm / 100;
    let km = cm / 100000;
    let pul = cm / 2.54;

    document.getElementById("milimetros").value = mm;
    document.getElementById("metros").value = m;
    document.getElementById("kilometros").value = km;
    document.getElementById("pulgadas").value = pul.toFixed(2);

}

function limpiar() {

    document.getElementById("cantidad").value = "";
    document.getElementById("milimetros").value = "";
    document.getElementById("metros").value = "";
    document.getElementById("kilometros").value = "";
    document.getElementById("pulgadas").value = "";

}