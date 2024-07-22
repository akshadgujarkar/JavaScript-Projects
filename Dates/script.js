const form = document.querySelector('form')

const input = document.querySelector('input')
const local = document.querySelector('.local')
const utc = document.querySelector('.utc')
const iso = document.querySelector('.iso')


form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const timeStamp = Number(input.value)
    const date = new Date(timeStamp)
    // console.log(date.toUTCString());
    local.innerText += date.toLocaleString('en-GB',{dateStyle:'full'})
    utc.innerText += date.toUTCString('en-GB',{dateStyle:'full'})
    iso.innerText += date.toISOString('en-GB',{dateStyle:'full'})
})