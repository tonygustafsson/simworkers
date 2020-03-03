# SimWorkers

Each Web worker is living it's own life and communicates with postMessage to the main
thread. Svelte is listening for these messages and updates the view.

In this example I'm using four towns, each with their own worker. My thought is that
they have a supply of food and money, and depening on the population the food will run out.

Just having fun, really.
