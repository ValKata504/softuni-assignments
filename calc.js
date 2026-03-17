function calc(N1, N2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = N1 + N2;
      break;
    case "-":
      result = N1 - N2;
      break;
    case "*":
      result = N1 * N2;
      break;
    case "/":
      result = (N1 / N2);
    if (N2 == 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
      }
      return;
    case "%":
      result = N1 % N2;
      if (N2 == 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        console.log(`${N1} ${operator} ${N2} = ${result}`);
      }
      return;
  }
  if(result % 2 == 0) {
  console.log(`${N1} ${operator} ${N2} = ${result} - even`);
  }
  else {
    console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
  }
}
calc(1, 1, "/");
