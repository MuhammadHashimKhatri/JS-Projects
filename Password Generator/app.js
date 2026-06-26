const lengthElement = document.querySelector("#length")
const upperCaseElement = document.querySelector("#uppercase")
const lowerCaseElement = document.querySelector("#lowercase")
const numberElement = document.querySelector("#number")
const symbolElement = document.querySelector("#symbols")
const lengthValue = document.querySelector('.lengthValue')

const generateBtn = document.querySelector(".gen-btn")
const copyBtn = document.querySelector(".copy-btn")

const passwordElement = document.querySelector('.password')

passwordElement.style.display = "none"

lengthElement.addEventListener('input', (()=>{
    lengthValue.innerHTML = lengthElement.value
}))

let generatedPassword = ""

generateBtn.addEventListener('click', ()=>{
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    const symbol = "!@#$%^&*()"

    let allChars = ""

    if(upperCaseElement.checked){
        allChars += upper
    }
    if(lowerCaseElement.checked){
        allChars += lower
    }
    if(numberElement.checked){
        allChars += number
    }
    if(symbolElement.checked){
        allChars += symbol
    }

    
    if(allChars == ""){
        passwordElement.style.display = "flex"
        passwordElement.innerHTML = "Please Select at least one option!"
        return;
    }
    
    let password = ""

    for(let i = 0; i < lengthElement.value; i++){
        let randomIndex = Math.floor(Math.random() * allChars.length)
        password += allChars[randomIndex]
    }
    generatedPassword = password
    passwordElement.style.display = "flex"
    passwordElement.innerHTML = password

})

copyBtn.addEventListener('click', ()=>{
    let passwordText = passwordElement.value

    if(generatedPassword == ""){
        passwordElement.style.display = "flex"
        passwordElement.innerHTML = "First generate password!"
        return;
    }

    navigator.clipboard.writeText(generatedPassword)

    copyBtn.innerHTML = "Copied! ✓"

    setTimeout(() => {
        copyBtn.innerHTML = "Copy"
    }, 2000);
})