<script>
    import { workers } from './stores/workers';

    export let id;

    $: message = '';
    $: money = 0;
    $: food = 0;
    $: population = 0;

    if (window.Worker) {
        var townWorker = new Worker('./worker.js', { name: id });

        workers.addWorker(townWorker);

        const listenOnWorker = e => {
            const response = e.data[0];

            message = response.message || message;
            money = response.money || money;
            food = response.food || food;
            population = response.population || population;
        };

        townWorker.addEventListener('message', listenOnWorker, false);
    }
</script>

<style>
    .town {
        width: calc(50% - 12px);
        flex: 1 0 calc(50% - 12px);
        min-height: 12em;
        background-color: aliceblue;
        font-family: monospace;
        border: 6px white solid;
        padding: 10px;
        box-sizing: border-box;
    }
</style>

<div class="town town--{id}">
    <h2>{id}</h2>

    <p>Message: {message}</p>
    <p>Money: {money}</p>
    <p>Food: {food}</p>
    <p>Population: {population}</p>
</div>
