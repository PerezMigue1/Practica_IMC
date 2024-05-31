function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    altura=altura/100;

    if (peso > 0 && altura > 0) {
        var imc = peso / (altura * altura);
        document.getElementById("resultadoIMC").innerText = imc.toFixed(2);

        var nivel = "";
        if (imc < 18.5) {
            nivel = "Bajo peso";
        } else if (imc >= 18.5 && imc < 25) {
            nivel = "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            nivel = "Sobrepeso";
        } else if (imc >= 30 && imc < 35) {
            nivel = "Obesidad (Grado I)";
        } else if (imc >= 35 && imc < 40) {
            nivel = "Obesidad (Grado II)";
        } else {
            nivel = "Obesidad (Grado III)";
        }

        document.getElementById("nivelPeso").innerText = nivel;
    } 
}