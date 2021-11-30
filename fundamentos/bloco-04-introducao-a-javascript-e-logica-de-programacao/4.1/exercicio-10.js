const imposto = 1.2;
const valorProduto = 9.5 * imposto;
const valorVenda = 13.0;

if (valorProduto < 0 || valorVenda < 0) {
  console.log("Erro: Valor inválido.");
} else {
  const lucro1000u = ((valorVenda - valorProduto) * 1000).toFixed(2);
  console.log("Lucro: " + lucro1000u);
}
