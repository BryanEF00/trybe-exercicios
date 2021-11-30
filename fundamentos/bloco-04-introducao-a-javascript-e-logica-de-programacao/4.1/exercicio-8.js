const numer1 = Math.floor((Math.random()*100+1));
const numer2 = Math.floor((Math.random()*100+1));
const numer3 = Math.floor((Math.random()*100+1));

console.log ("Número1: " + numer1)
console.log ("Número2: " + numer2)
console.log ("Número3: " + numer3)

let par = false;

if (numer1 % 2 === 0 || numer2 % 2 === 0 || numer3 % 2 === 0) {
  par = true;
}

console.log(par)