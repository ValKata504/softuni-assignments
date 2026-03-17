function calculate(sumDeposit, timeInMonths, interest) {
const sumInterest = sumDeposit * (interest / 100);
const interestForMonth = sumInterest / 12;
const finalSum = sumDeposit + (timeInMonths * interestForMonth);

console.log(finalSum)
}
calculate(2350, 6, 7)