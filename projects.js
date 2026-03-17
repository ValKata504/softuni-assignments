function projects(architectName, projectsAmount) {
    let hoursNeeded = projectsAmount * 3;
    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectsAmount} project/s.`);
}

projects("George", 4, 12)