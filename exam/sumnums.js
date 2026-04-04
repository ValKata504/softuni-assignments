function sumNumbers(input) {
  let maxSum = Number(input[0]);
  let sum = 0;
  let index = 1;

  while (sum < maxSum) {
    let currentNum = Number(input[index]);
    sum += currentNum;
    index++;
  }
  console.log(sum);
}
