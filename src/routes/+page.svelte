<script>
    import Panel from './Panel.svelte'; 
    import { panelData } from './data.js'; 
</script>

<main>
    <div id='container'> 
        {#each panelData as item }
            <a href={item.link} style='background-image: url({item.image});'>
                <Panel>
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                </Panel>
            </a>
        {/each}
    </div>
</main>

<style>

    main {
        height: 96vh;
        background-color: rgba(184,184,184);
    }

    #container {
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 10px; 
        padding: 10px 50px; 
        margin-top: 80px; 
        background-color: rgba(184,184,184);
    }

    a {
        border-radius: 8px; 
        background-size: cover;
        background-position: center;
        text-decoration: none;
        color: white;
    }

</style>