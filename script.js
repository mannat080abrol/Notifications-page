let button = document.getElementById("read");

button.addEventListener('click',()=>{
    document.querySelectorforAll('.single-box').forEach(e =>
        {
            e.classlist.remove('unseen');
        });
        document.querySelectorAll('.dot').forEach(e =>
            {
                e.classlist.remove('dot');

            });
   document.getElementById('num').innerText = '0';      
})