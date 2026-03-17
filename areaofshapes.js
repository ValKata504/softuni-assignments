function shapes(shape, num1, num2) {
    if (shape === "square") {
        square = num1 * num1
        console.log(square)
    }
    else if (shape === "rectangle") {
        console.log(num1 * num2);
    }
    else if (shape === "circle") {
        console.log(num1 * num1 * Math.PI)
    }
    else if (shape === "triangle")
        console.log(num1 * num2 / 2)
}
shapes("triangle", 4.5, 20)