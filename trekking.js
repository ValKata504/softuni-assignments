function trekkingMania(input) {

    // Общо хора от всички групи
    let totalPeople = 0;

    // Брой хора за всяка планина
    let musala = 0;
    let monblan = 0;
    let kiliminjaro = 0;
    let k2 = 0;
    let everest = 0;

    // Първият елемент на input е броят групи
    let groups = Number(input[0]);

    // Обхождаме всяка група
    for (let index = 1; index <= groups; index++) {

        // Вземаме броя хора в текущата група
        const peopleFromGroup = Number(input[index]);

        // Добавяме ги към общия брой хора
        totalPeople += peopleFromGroup;

        // Разпределяме хората според големината на групата
        if (peopleFromGroup <= 5) {
            musala += peopleFromGroup;          // До 5 човека -> Мусала
        }
        else if (peopleFromGroup <= 12) {
            monblan += peopleFromGroup;         // До 12 -> Монблан
        }
        else if (peopleFromGroup <= 25) {
            kiliminjaro += peopleFromGroup;     // До 25 -> Килиманджаро
        }
        else if (peopleFromGroup <= 40) {
            k2 += peopleFromGroup;              // До 40 -> К2
        }
        else {
            everest += peopleFromGroup;         // Над 40 -> Еверест
        }
    }

    // Изчисляваме процента хора за всяка планина
    const musalaPercentage = (musala / totalPeople) * 100;
    console.log(`${musalaPercentage.toFixed(2)}%`);

    const monblanPercentage = (monblan / totalPeople) * 100;
    console.log(`${monblanPercentage.toFixed(2)}%`);

    const kiliminjaroPercentage = (kiliminjaro / totalPeople) * 100;
    console.log(`${kiliminjaroPercentage.toFixed(2)}%`);

    const k2Percentage = (k2 / totalPeople) * 100;
    console.log(`${k2Percentage.toFixed(2)}%`);

    const everestPercentage = (everest / totalPeople) * 100;
    console.log(`${everestPercentage.toFixed(2)}%`);
}
trekkingMania(534)