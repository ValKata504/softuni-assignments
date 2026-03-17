function repaint(nylon, paint, paintThinner, labour) {
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + (paint * 0.1)) * 14.50;
    let paintThinnerPrice = paintThinner * 5.00;
    let bagPrice = 0.40;
    let totalPriceMats = nylonPrice + paintPrice + paintThinnerPrice + bagPrice;
    let labourPrice = (totalPriceMats * 0.3) * labour;
    let endSum = totalPriceMats + labourPrice;
    console.log(endSum)
}
repaint(10, 11, 4, 8)