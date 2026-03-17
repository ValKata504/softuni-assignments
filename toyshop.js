function toyshop(vacation, puzzles, talkingDoll, teddy, minion, truck) {
  const puzzlePrice = 2.6;
  const talkingDollPrice = 3.0;
  const teddyPrice = 4.1;
  const minionPrice = 8.2;
  const truckPrice = 2.0;

  let toyAmount = puzzles + talkingDoll + teddy + minion + truck;

  let totalPrice =
    puzzles * puzzlePrice +
    talkingDoll * talkingDollPrice +
    teddy * teddyPrice +
    minion * minionPrice +
    truck * truckPrice;

  if (toyAmount >= 50) {
    totalPrice *= 0.75;
  }

  let rent = totalPrice * 0.1;
  let profit = totalPrice - rent;

  if (profit >= vacation) {
    console.log(`Yes! ${(profit - vacation).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(vacation - profit).toFixed(2)} lv needed.`,
    );
  }
}
toyshop(320, 8, 2, 5, 5, 1);
toyshop(320.21, 8, 2, 5, 5, 1);
toyshop(40.8, 20, 25, 30, 50, 10);
