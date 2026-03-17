function vowels(text) {
    let sum = 0

    for(let i = 0; i < text.length; i++)
    sum += text[i] * 1
    console.log(`The sum of the digits is:${sum}`)
}
vowels("1234")