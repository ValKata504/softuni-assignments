function foosh(lenght, width, height, percent) {
    volume = lenght * width * height;
    volumeLitres = volume * 0.001;
    spaceTaken = percent * 0.01;
    // console.log(spaceTaken)
    litresNeeded = volumeLitres * (1 - spaceTaken);
    console.log(litresNeeded);
}
foosh(85, 75, 47, 17)