import { writable, get } from 'svelte/store';
import { workers } from './workers';

const initValue = {
    money: 1000,
    food: 1000
};

function createResources() {
    const { subscribe, set, update } = writable(initValue);

    return {
        subscribe,
        takeMoney: funds => {
            update(resources => {
                return { ...resources, money: resources.money - funds };
            });
        },
        takeFood: food => {
            update(resources => {
                return { ...resources, food: resources.food - food };
            });
        }
    };
}

export const resources = createResources();

resources.subscribe(value => {
    const $workers = get(workers);
    const $resources = get(resources);

    $workers.forEach(worker => {
        worker.postMessage([$resources]);
    });
});
