const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')//toggle significa adicione caso tenha, e remova caso n tenha
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)