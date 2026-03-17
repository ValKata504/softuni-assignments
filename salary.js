function salary(data) {
  let salary = data[1];
  let tabs = data[0];

  for (index = 0; index < tabs; index++) {
    // console.log(data[index + 2]);
    switch (data[index + 2]) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }
    if (salary <= 0) {
      console.log("You have lost your salary.");
      return;
    }
  }
  console.log(salary)
}
salary([
  10,

  750,

  "Facebook",

  "Dev.bg",

  "Instagram",

  "Facebook",

  "Reddit",

  "Facebook",

  "Facebook",
]);
