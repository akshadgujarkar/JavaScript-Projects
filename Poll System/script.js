const options = [
    {id:'option1',text: 'JavaScript',votes:0},
    {id:'option2',text: 'Python',votes:0},
    {id:'option3',text: 'Java',votes:0},
    {id:'option4',text: 'C++',votes:0},
]
function submitVote(){
    const seletedOption = document.querySelector('input[name="poll"]:checked')
    // console.log(seletedOption.value);
    if(!seletedOption){

        alert('Please select an option')
        return
    }

    const optionID = seletedOption.value
    // find function return the element of an array where condition is matched
    const seletedOptionObj = options.find((option)=>{
        return option.id === optionID
    })
     console.log(seletedOptionObj);

    if(seletedOptionObj){

        seletedOptionObj.votes++
        //console.log(seletedOptionObj);
         displayResult()
    }

}

function displayResult(){

    const result = document.getElementById('result')
    result.innerHTML = ""

    options.forEach((option)=>{
        const percentage = ((option.votes / getTotalVotes())*100).toFixed(2)||0
        const barWidth = percentage > 0 ? percentage+"%" : '0%'
        const optionResult = document.createElement('div')
        optionResult.className = 'option-result'
        optionResult.innerHTML = `
          <span class="option-text">${option.text}</span>
          <div class="bar-container">
          <div class="bar" style="width:${barWidth};"></div>
          </div>
            <span class="percentage">${percentage}%</span>
        `
      result.appendChild(optionResult)
    })
}

function getTotalVotes(){
    return options.reduce((accumulator,element)=>accumulator + element.votes,0)
}

displayResult()