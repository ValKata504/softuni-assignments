function goldMine(input) {
  let index = 0;
  const locations = Number(input[index++]);

  for (let i = 0; i < locations; i++) {
    const expectedAvg = Number(input[index++]);
    const days = Number(input[index++]);

    let totalGold = 0;
    for (let d = 0; d < days; d++) {
      totalGold += Number(input[index++]);
    }

    const avgGold = totalGold / days;

    if (avgGold >= expectedAvg) {
      console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
    } else {
      const needed = expectedAvg - avgGold;
      console.log(`You need ${needed.toFixed(2)} gold.`);
    }
  }
}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
