<div class='panel'>
    <slot/>
</div>

<style>
    .panel { 
        max-width: 100%; 
        max-height: 35vh; 
        height: 400px; 
        border: solid 2pt black; 
        border-radius: 8px; 
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>