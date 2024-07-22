const timer = document.querySelector('.timer')
let time = 30
const nextPage = document.querySelector('.nextButton')

const clearIn = setInterval(() => {
    timer.innerText = `00.${time--}`

    if (time === 15) document.body.style.backgroundColor = '#D4D69F8C'
    if (time === 5) document.body.style.backgroundColor = '#DBADAD'
    if (time === 0) {
        timer.innerText = '00.00'
        clearInterval(clearIn)
        location.reload(true)
    }

}, 1000)

const answers = document.querySelector('.answers').children

const show = document.querySelector('.Show').children
const array = Array.from(answers)
let flag = false
array.forEach((element)=>{

    element.addEventListener('click',(event)=>{
            
        if(element.textContent.trim().toLowerCase()==='script'){
        
            element.id = 'right'
             element.textContent += ' || Right answer'
          
        }
        else{
        
            element.id = 'wrong'
            element.textContent += `   ||  Wrong answer`
            array[3].id = 'right'
            if(!flag){
                array[3].textContent = `${array[3].textContent}  || Right answer` 
                  flag = true
            }
        }
    },{once:true})
})

nextPage.addEventListener('click',(event)=>{
  window.history.back()
})