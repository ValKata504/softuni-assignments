function numbers() {
for (let i = 1; i <= 100; i++) {
    //console.log(i)
    }
}
//numbers()

function numbersBackwards(N) {
for (let i = N; i >= 1; i--) {
    //console.log(i)
    }
}
//numbersBackwards()

function oneToNStepThree(N) {
for (let i = 1; i <= N; i += 3) {
    console.log(i)
    }
}
//oneToNStepThree(10)

function evenPowersOfTwo(N) {
let x = 1

for (let i = 0; i <= N; i += 2) {
    console.log(x)
    x *= 4
    }
}
//evenPowersOfTwo(5)

function word(word) {
    for(let i = 0; i < word.length; i++) {
        let letter = word[i];
        console.log(letter)
    }
}
//word("hello")