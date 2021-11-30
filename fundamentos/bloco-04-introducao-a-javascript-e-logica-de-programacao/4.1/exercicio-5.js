const lado1 = 45;
const lado2 = 15;
const lado3 = 120;

if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
  console.log(
    "Erro: Um ângulo será considerado inválido se não tiver um valor positivo."
  );
} else {
  let trianguloValido;
  if (lado1 + lado2 + lado3 === 180) {
    trianguloValido = true;
  } else {
    trianguloValido = false;
  }
  console.log(trianguloValido);
}
