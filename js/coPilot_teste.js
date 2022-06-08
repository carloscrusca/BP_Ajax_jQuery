function calculateDaysBetweenDates(begin, end) {
    var date1 = new Date(begin);
    var date2 = new Date(end);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}

function calcularMedia(array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
}

function calculaParcelacomJuros(valor, juros, parcelas) {
    var valorParcela = valor * (1 + juros) ** parcelas;
    return valorParcela;
}

    const btn = document.querySelector("#send");

function calculaPmt(valor, juros, parcelas) {
    

    var valor = document.querySelector("#valor");
    var juros = document.querySelector("#juros");
    var parcelas = document.querySelector("#parcela");

    valor = parseFloat(valor);
    juros = parseFloat(juros);
    parcelas = parseFloat(parcelas);

    valorParcela = valor * (1 + juros) ** (parcelas - 1);

    var resultado = valorParcela;
   // return valorParcela;
  
   alert(resultado);
    

}

function testeAlerta() {
    var valor = 10;
    var juros = 1;
    var parcelas = 2;
    var valorParcela = valor * (1 + juros) ** (parcelas - 1);
    alert(valorParcela);
}