
function calcula() {

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    document.getElementById("calculo").innerHTML = "O seu IMC é = " + peso / (altura * altura);




}



