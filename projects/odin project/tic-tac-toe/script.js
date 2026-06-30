const gameboard = (() => {
  let gameboardarray=['','','','','','','','',''];

  const getboard = (a, b) => {
    lastResult = a + b;
    return lastResult;
  };
  const placemarker = (a, b) => {
    lastResult = a - b;
    return lastResult;
  };
  const resetboard = (a, b) => {
    lastResult = a * b;
    return lastResult;
  };


  return { add, subtract, multiply, divide, getLastResult };
})();

console.log(calculator.add(3, 5)); // 8
console.log(calculator.subtract(6, 2)); // 4
console.log(calculator.getLastResult()); // 4
console.log(calculator.multiply(14, 5534)); // 77476
