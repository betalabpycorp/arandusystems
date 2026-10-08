    const menubtn = document.querySelector('.btn-menu');

    const nav = document.querySelector('nav');

        menubtn.addEventListener('click', () =>{
    if(nav.classList.toggle('active')){
        menubtn.textContent = 'X';
    } else {
        menubtn.textContent = '☰';
    }
    console.log('Hiciste click al btn hamburguesa');
});