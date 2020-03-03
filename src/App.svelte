<script>
    import Town from './Town.svelte';
    import Resources from './Resources.svelte';
</script>

<style>
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .towns {
        display: flex;
        flex-wrap: wrap;
    }
</style>

<main>
    <h1>SimWorkers</h1>

    <Resources />

    <div class="towns">
        <Town id="town1" />
        <Town id="town2" />
        <Town id="town3" />
        <Town id="town4" />
    </div>
</main>
