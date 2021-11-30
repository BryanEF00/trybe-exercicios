const peçaXadrez = "cavalo";

switch (peçaXadrez.toLocaleLowerCase()) {
  case "rei":
    console.log("Rei: Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
    break;
  case "rainha":
    console.log("Rainha: Pode mover-se em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.");
    break;
  case "torre":
    console.log("Torre: Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
    break;
  case "bispo":
    console.log("Bispo: Move-se na diagonal, quantas casas quiser.");
    break;
  case "cavalo":
    console.log("Cavalo: O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.");
    break;
  case "peao":
    console.log("Peão: Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
    break;
  default:
    console.log("Insira uma peça válida");
}
