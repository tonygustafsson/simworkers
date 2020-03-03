let money = 1000;
let food = 1000;
let population = Math.floor(Math.random() * 10) || 1;

function randomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const workerName = self.name;
postMessage([workerName, 'Created.']);

setInterval(function() {
    const foodNeeded = population * 1;
    const foodNeededFiveTicks = foodNeeded * 5;
    const foodCostForFiveTicks = foodNeededFiveTicks * 10;

    //debugger;

    if (foodNeededFiveTicks > food) {
        // Food will run out soon
        if (money >= foodCostForFiveTicks) {
            // Can afford to buy more food
            food += foodNeededFiveTicks;
            money -= foodCostForFiveTicks;
        } else {
            // Population dies
            population -= 1;
            population = population < 0 ? 0 : population;
        }
    }

    food -= foodNeeded;

    postMessage([
        {
            worker: workerName,
            message: randomString(8),
            money: money,
            food: food,
            population: population
        }
    ]);
}, 50);

onmessage = e => {};
