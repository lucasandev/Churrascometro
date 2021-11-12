//definir a finalizade dele antes do início
//carne - 400gr por pessoa + de 6 horas - 650
//cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
//Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function regras() {
    resultado.innerHTML = "<p> Carne por pessoa em até 6 horas de churrasco = 400 gr <br><br> Carne por pessoa para duração de churrasco maior que 6 horas = 650 gr <br><br> Cerveja por pessoa em até 6 horas de churrasco = 1200 ml <br><br> Cerveja por pessoa para mais de 6 horas de churrasco = 2000 ml<br><br>Refrigerante/água por pessoa em até 6 horas = 1000 ml<br><br> Refrigerante/água por pessoa para duração de churrasco maior do que 6 horas = 1500 ml"
}

function calcular() {
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne </p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja / 1000} Litros de Cerveja </p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas / 1000} Litros de Bebidas (águas e refrigerantes) </p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }

}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }

}
function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1000;
    }
    else {
        return 1500;
    }
}