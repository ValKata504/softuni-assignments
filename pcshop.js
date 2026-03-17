function shop(budget, gpu, cpu, ram) {
    const gpuPrice = gpu * 250;
    const cpuPrice = cpu * (gpuPrice * 0.35);
    const ramPrice = ram * (gpuPrice * 0.1);

    totalCost = gpuPrice + cpuPrice + ramPrice

    if (gpu > cpu) {
        totalCost *= 0.85
    }

    if (budget >= totalCost) {
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    }

    else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`)
    }
}
shop(920.45, 3, 1, 1)
shop(900, 2, 1, 3)