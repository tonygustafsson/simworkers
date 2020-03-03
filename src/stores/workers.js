import { writable } from 'svelte/store';

const initValue = [];

function createWorkers() {
    const { subscribe, set, update } = writable(initValue);

    return {
        subscribe,
        addWorker: worker => {
            update(workers => {
                let newWorkers = [...workers];
                newWorkers.push(worker);
                return newWorkers;
            });
        }
    };
}

export const workers = createWorkers();
