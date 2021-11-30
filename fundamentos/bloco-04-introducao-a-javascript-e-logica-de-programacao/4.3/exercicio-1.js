const n = 3;

//Gerador de linhas.
for (let index = 0; index < n; index += 1) {
  let impressora = "";
  let asterisco = "*";

  //Gerador de colunas.
  for (let i = 0; i <= n; i += 1) {
    if (i < n) {
      impressora += asterisco;
    } else {
      console.log(impressora);
    }
  }
}
