<script> 

    let menuMain = [
        { title: 'Collections', link: '/'},
        { title: 'Information', link: 'link 2'}
    ]; 

</script>

<header>
    <div id='container'>
        <h1>Early English Electronic Music</h1>
        <div class='collections'>
            {#each menuMain as item }
                <ul><a href='{item.link}'>{item.title}</a></ul>
            {/each}
        </div>
    </div>

</header>

<style>

    header {
        background-color: rgb(32,32,32);
        color: rgb(211,211,211);
        position: fixed; 
        top: 0; 
        width: 100%; 
        height: 80px; 
    }

    #container {
        display: flex; 
        align-items: center;
        justify-content: space-between;
        padding-left: 50px; 
        padding-right: 50px; 
        height: 100%; 
    }

    .collections {
        display: flex; 
        align-items: center;
        justify-content: end;
        gap: 20px; 
    }

    ul {
        border: solid 1pt white; 
        padding: 2px; 
    }

    a {
        color: white; 
        text-decoration: none;
    }

</style>