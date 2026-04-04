function sumOfTwoNumbers(start, end, magic) {

    let count = 0;
    let found = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;

            if (i + j === magic) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magic})`);
                found = true;
                break;
            }
        }

        if (found) break;
    }

    if (!found) {
        console.log(`${count} combinations - neither equals ${magic}`);
    }
}
sumOfTwoNumbers(1, 10, 5)
