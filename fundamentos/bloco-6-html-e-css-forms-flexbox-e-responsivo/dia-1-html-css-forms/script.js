const stateList = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goías",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraíma",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const statesForm = document.getElementById("states");

for (let i = 0; i < stateList.length; i += 1) {
  let state = document.createElement("option");
  state.value = stateList[i].toLocaleLowerCase();
  state.innerText = stateList[i];

  statesForm.appendChild(state);
}
