<script>

    let infoFooter = [
            {   copyright: '© 2023-2028'}, 
            {   
                address1: 'University of Huddersfield', 
                address2: 'Queensgate HD13DH',
                address3: 'Yorkshire, UK'
            }
    ]; 
        
</script>

<footer>
    <div id='containerFooter'>
        <p>{infoFooter[0].copyright}</p>
        <div id='address'>
            <p>{infoFooter[1].address1}</p>
            <p>{infoFooter[1].address2}</p>
            <p>{infoFooter[1].address3}</p>
        </div>
    </div>

</footer>

<style>

    footer {
        width: 100%; 
        height: 60px; 
        background-color: rgb(32,32,32);
        color: white;
        position: fixed; 
        bottom: 0; 
    }

    #containerFooter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 50px; 
        padding-right: 50px; 
        height: 100%; 
    }

</style>