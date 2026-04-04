function read(input) {
    let index = 0
    let string = input[index];

    while(string !== "Stop") {
        console.log(string)
        index++;
        string = input[index]
    }
}
read(["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"])