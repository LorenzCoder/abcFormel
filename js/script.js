function abcFormel(a, b, c) {
  let result = [((-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a)),
  ((-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a))];
  return result;
}

function senden() {
  const inputA = Number.parseFloat(document.getElementById('a').value);
  const inputB = Number.parseFloat(document.getElementById('b').value);
  const inputC = Number.parseFloat(document.getElementById('c').value);
  const output1 = document.getElementById('output1');
  const output2 = document.getElementById('output2');
  let result = abcFormel(inputA, inputB, inputC);
  output1.innerHTML = result[0];
  output2.innerHTML = result[1];
}