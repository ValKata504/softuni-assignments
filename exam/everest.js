function everest(startFirst, endFirst, startSecond, endSecond) {
  let count = 0;

  for (let firstDigit1 = startFirst; firstDigit1 <= 8; firstDigit1++) {
    for (let secondDigit1 = 9; secondDigit1 >= endFirst; secondDigit1--) {
      for (let firstDigit2 = startSecond; firstDigit2 <= 8; firstDigit2++) {
        for (let secondDigit2 = 9; secondDigit2 >= endSecond; secondDigit2--) {
          if (
            firstDigit1 % 2 === 0 &&
            firstDigit2 % 2 === 0 &&
            secondDigit1 % 2 === 1 &&
            secondDigit2 % 2 === 1
          ) {
            if (firstDigit1 === firstDigit2 && secondDigit1 === secondDigit2) {
              console.log("Cannot change the same player.");
            } else {
              console.log(
                `${firstDigit1}${secondDigit1} - ${firstDigit2}${secondDigit2}`,
              );
              count++;
            }

            if (count === 6) {
              return;
            }
          }
        }
      }
    }
  }
}
