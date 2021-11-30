const salarioBruto = 3000.00;
let salarioINSS;
let salarioIR;
let salarioLiquido;

//INSS
if (salarioBruto <= 1556.94) {
  salarioINSS = salarioBruto * 0.92;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioINSS = salarioBruto * 0.91;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioINSS = salarioBruto * 0.89;
} else {
  salarioINSS = salarioBruto - 570.88;
}

//IR
if (salarioINSS <= 1903.98) {
  salarioIR = salarioLiquido;
} else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
  salarioIR = ((salarioINSS * 1.075) - salarioINSS) - 142.8;
} else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
  salarioIR = ((salarioINSS * 1.15) - salarioINSS) - 354.8;
} else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
  salarioIR = ((salarioINSS * 1.225) - salarioINSS) - 636.13;
} else {
  salarioIR = ((salarioINSS * 1.275) - salarioINSS) - 869.36;
}

console.log(salarioLiquido = "Salário: " + (salarioINSS - salarioIR).toFixed(2));
