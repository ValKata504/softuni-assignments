function accountBalance(input) {
  let total = 0;
  let index = 0;

  while (input[index] !== "NoMoreMoney") {
    let amount = Number(input[index]);
    if (amount < 0) {
      console.log("Invalid operation!");
      break;
    }
    console.log(`Increase: ${amount.toFixed(2)}`);
    total += amount;
    index++;
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
