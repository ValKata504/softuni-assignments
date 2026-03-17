function cinepie(ticket, rows, columns) {
    let ticketprice = 0
    let income

    switch(ticket) {
        case "Premiere":
        ticketprice = 12
        break;
        case "Normal":
        ticketprice = 7.5
        break;
        case "Discount":
        ticketprice = 5.0
        break;
    }
    income = rows * columns * ticketprice
    console.log(`${income.toFixed(2)} leva`)
}
cinepie("Discount",
12,
30
)