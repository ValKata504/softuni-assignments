function oscars(kaput) {
  let points = Number(kaput[1]);
  let judges = kaput[2];
  let name = kaput[0];
  const pointsrequired = 1250.5;

  for (index = 0; index < judges; index++) {
    //console.log(kaput[2 * index + 3].length)
    //console.log(kaput[2 * index + 4])

    points += (kaput[2 * index + 3].length * kaput[2 * index + 4]) / 2;
    if (points > pointsrequired) {
      console.log(
        `Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`,
      );
      return;
    }
  }
  console.log(`Sorry, ${name} you need ${(pointsrequired - points).toFixed(1)} more!`);
}
/*oscars(["Zahari Baharov",

"205",

4,

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])

*/ oscars([
  "Sandra Bullock",

  "340",

  "5",

  "Robert De Niro",

  "50",

  "Julia Roberts",

  "40.5",

  "Daniel Day-Lewis",

  "39.4",

  "Nicolas Cage",

  "29.9",

  "Stoyanka Mutafova",

  "33",
]);
