function isSelected(status) {
    return status
}
const resultSection = document.querySelector('.result-section')
let repayment = false, int = false


const clearForm = document.querySelector('#clear-form')
clearForm.addEventListener('click', (event) => {
    location.reload()
})
let amt = 0, y = 0, r = 0
const captialAmt = document.querySelector('.amount')
captialAmt.addEventListener('change', (event) => {
    amt = event.target.value
})

const year = document.querySelector('#year')
year.addEventListener('change', (event) => {
    y = event.target.value
})

const rate = document.querySelector('#rate')
rate.addEventListener('change', (event) => {
    r = event.target.value
})

/* process to find the montly repayment 
 1) to calcuate the montly interest 
 2) total number of montly payment
 3) calculate montly repayment
*/

const calcuate = document.querySelector('.calculate')
calcuate.addEventListener('click', () => {

    const monthlyInterest = r / (12 * 100)
    const monthlyPayment = y * 12
    const payment = (amt * monthlyInterest * Math.pow((1 + monthlyInterest), monthlyPayment)) / (Math.pow((1 + monthlyInterest), monthlyPayment) - 1)
    // console.log(Math.ceil(payment));



    if (int) {
        
        resultSection.style.display = 'block'
        resultSection.innerHTML = `
                         <div class="after-action">
                        <div class="result-heading">Your results</div>
                        <div class="instruction">
                            <p>Your results are shown below on the information <br>
                                you provided. To adjust the results, edit the form and <br>
                                click "calculate repayments" again.
                            </p>
                        </div>
                        <div class="response-container">
                            <p id="result-total-repay">The Interest amount you will pay over Mortgage amount</p>
                            <div class="result-repay-amt"> ₹ ${Math.floor(monthlyPayment)}</div>
    
                        </div>
        
        `
        int = false
        
    }
    else if (repayment) {
        resultSection.style.display = 'block'
        resultSection.innerHTML = `
                             <div class="after-action">
                            <div class="result-heading">Your results</div>
                            <div class="instruction">
                                <p>Your results are shown below on the information <br>
                                    you provided. To adjust the results, edit the form and <br>
                                    click "calculate repayments" again.
                                </p>
                            </div>
                            <div class="response-container">
                                <p id="result-monthly">Your monthly repayments</p>
                                <div class="result-amount"> ₹ ${Math.ceil(payment)}</div>
        `
        repayment=false
    }
    else {
        resultSection.style.display = 'block'
        resultSection.innerHTML = `
                             <div class="after-action">
                            <div class="result-heading">Your results</div>
                            <div class="instruction">
                                <p>Your results are shown below on the information <br>
                                    you provided. To adjust the results, edit the form and <br>
                                    click "calculate repayments" again.
                                </p>
                            </div>
                            <div class="response-container">
                                <p id="result-monthly">Your monthly repayments</p>
                                <div class="result-amount"> ₹ ${Math.ceil(payment)}</div>
                                <hr>
                                <p id="result-total-repay">Total you'll repay over the term</p>
                                <div class="result-repay-amt"> ₹ ${Math.floor(payment * monthlyPayment)}</div>
        
                            </div>
            
            `
    }





}


)





const repay = document.querySelector('#repay')
repay.addEventListener('click', (event) => {
    document.querySelector('.repay').style = `
                                            background-color: rgba(231, 231, 127, 0.716);           
    `
    document.querySelector('.interest').style = `
    background-color:white;           
`

    repayment = isSelected(true)
})

const interest = document.querySelector('#interest')
interest.addEventListener('click', (event) => {
    document.querySelector('.interest').style = `
                                            background-color: rgba(231, 231, 127, 0.716);           
    `
    document.querySelector('.repay').style = `
    background-color:white;           
`
    int = isSelected(true)
})