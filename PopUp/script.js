const popUp = document.querySelector('.popUp')
const button = document.querySelector('button')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')


button.addEventListener('click',(event)=>{
    popUp.classList.add('open')
    overlay.style.display = 'block'
})

close.addEventListener('click',(event)=>{
    popUp.classList.remove('open')
    overlay.style.display = 'none'
})