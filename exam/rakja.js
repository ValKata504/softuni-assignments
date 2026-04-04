function kawaiiRak(data) {
  let totalLiters = 0

  let totalDegrees = 0

  for (let index = 0; index < Number(data[0]); index++) {
    let liters = Number(data[(index * 2) + 1])

    let degrees = Number(data[(index + 1) * 2])

    totalLiters += liters
    
    totalDegrees += liters * degrees
  }

  console.log(`Liter: ${totalLiters.toFixed(2)}`)
  
  let avgDegrees = totalDegrees / totalLiters

  console.log(`Degrees: ${avgDegrees.toFixed(2)}`)
  
  if (avgDegrees < 38) {
    console.log("Not good, you should baking!")
  } else if (avgDegrees <= 42) {
    console.log("Super!")
  } else {
    console.log("Dilution with distilled water!")
  }
}
kawaiiRak(["3",
"100",
"45",
"50",
"55",
"150",
"36"])