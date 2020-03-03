<script>
    import { resources } from './stores/resources';
</script>

<style>
    .resources {
        background-color: bisque;
        font-family: monospace;
        border: 6px white solid;
        padding: 10px;
    }
</style>

<div class="resources">
    <button on:click={() => resources.takeMoney(10)}>Take 10 money</button>

    <table>
        <tr>
            <td>Money:</td>
            <td>{$resources.money}</td>
        </tr>
        <tr>
            <td>Food:</td>
            <td>{$resources.food}</td>
        </tr>
    </table>
</div>
