// define functions
function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  // define increment and decriment
  function increment(n) {
    return (n += 1);
  }
  function decrement(n) {
    return (n -= 1);
  }
  function makeInt(string) {
    var parsedInt = parseInt(string, 10);
    return parsedInt;
  }
  function preserveDecimal(string) {
    var parsedFloat = parseFloat(string);
    return parsedFloat;
  }