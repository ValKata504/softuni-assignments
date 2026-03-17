function sort(array) {
    const n = Number(array[0]);
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;

    for (let index = 1; index <= n; index++) {
        const currNum = Number(array[index]);

        if (currNum < 200) p1++;
        else if (currNum < 400) p2++;
        else if (currNum < 600) p3++;
        else if (currNum < 800) p4++;
        else p5++;
    }

    console.log(`${((p1 / n) * 100).toFixed(2)}%`);
    console.log(`${((p2 / n) * 100).toFixed(2)}%`);
    console.log(`${((p3 / n) * 100).toFixed(2)}%`);
    console.log(`${((p4 / n) * 100).toFixed(2)}%`);
    console.log(`${((p5 / n) * 100).toFixed(2)}%`);
}
sort([])