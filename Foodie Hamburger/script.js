const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')

const height = window.innerWidth>924
menu.addEventListener('click',(event)=>{

    if(nav.style.display!=='block')
     nav.style.display = 'block'
    else{
        nav.style.display = 'none'
    }
    
 if(height) nav.style.display = 'flex'

})

