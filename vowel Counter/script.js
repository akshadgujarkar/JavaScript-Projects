
function checkVowels(){
    const textarea = document.getElementById('inputText').value.toLowerCase()
    
    let vowelCount = 0

    for(let i = 0 ; i<textarea.length; i++){
        let char = textarea.charAt(i)
        if(isVowel(char)){
          vowelCount++;
        }
    }
    const result = document.querySelector('#result')
    result.textContent = "Total Vowels " + vowelCount;
}

function isVowel(char)
{
    const vowel = ['a','e','i','o','u']
    return vowel.includes(char)
}