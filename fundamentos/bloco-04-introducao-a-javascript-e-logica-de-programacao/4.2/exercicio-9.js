let numbers = [];
let div2;

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

for (let i = 0; i < numbers.length; i += 1) {
  div2 = (numbers[i] / 2);
  console.log(div2);
}
