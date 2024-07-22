const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const miliseconds = document.getElementById('miliseconds')

const startBtn = document.querySelector('#startBtn')

const stopBtn = document.getElementById('stopBtn')

const pausetBtn = document.getElementById('pauseBtn')

const resetBtn = document.getElementById('resetBtn')


const laplist = document.getElementById('laplist')

// stop watch variables

let min = 0 
let sec = 0
let mili = 0
let interval;

startBtn.addEventListener('click',startTimer)
stopBtn.addEventListener('click',stopTimer)
pauseBtn.addEventListener('click',pauseTimer)
resetBtn.addEventListener('click',resetTimer)


function startTimer(){

  interval = setInterval(updateTimer,10)
    startBtn.disabled = true
    pausetBtn.disabled = false
}

function stopTimer(){
    clearInterval(interval)
    addToLap()
 
    resetTimerData()
    startBtn.disabled = false

}

function pauseTimer(){
    clearInterval(interval)
   pausetBtn.disabled = true
   startBtn.disabled = false 
}

function resetTimer(){
    clearInterval(interval)
    resetTimerData()
    startBtn.disabled = false
}

function updateTimer(){
    mili++
    if(mili === 100){  // 1 seconds is eq to 1000 miliseconds
        mili = 0
        sec++
        if(sec === 60){
            sec= 0 
            min++
        }
    }
    displayTimer()
}

function displayTimer(){
    miliseconds.textContent = padTime(mili)
    seconds.textContent = padTime(sec)
    minutes.textContent = padTime(min)
}

function padTime(time){

    return time.toString().padStart(2,'0')
}

function resetTimerData(){
    min = 0 
    sec = 0 
    mili = 0
    displayTimer()
}

function addToLap(){
    const lapTime = `${padTime(min)}: ${padTime(sec)}: ${padTime(mili)}`
    const listItem = document.createElement('li') 
    listItem.innerHTML = `<span>Lap ${laplist.childElementCount + 1}:</span> ${lapTime}`
    laplist.appendChild(listItem)
}