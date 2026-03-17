function lunch(title, showTime, breakTime) {
    breakTime *= 5 / 8
    if (showTime <= breakTime) {
        console.log(`You have enough time to watch ${title} and left with ${Math.ceil(breakTime - showTime)} minutes free time.`)
    }
    else {
        console.log(`You don't have enough time to watch ${title}, you need ${Math.ceil(showTime - breakTime)} more minutes.`)
    }
}
lunch("House MD", 60, 96)
lunch("House MD", 48, 60)