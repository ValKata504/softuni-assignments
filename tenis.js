function tenis(input) {
    let matches = input[0]
    let startingPoints = Number(input[1])
    let points = 0
    let wins = 0

for (index = 0; index < matches; index++) {
    // console.log(data[index + 2]);
    switch (input[index + 2]) {
      case "F":
        points += 1200;
        break;
      case "SF":
        points += 720;
        break;
      case "W":
        points += 2000;
        wins += 1
        break;
        }
    }
    console.log(`Final points: ${startingPoints + points}`)
    console.log(`Average points: ${Math.floor(points / matches)}`)
    console.log(`${(100 * wins / matches).toFixed(2)}%`)
}
tenis(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])
