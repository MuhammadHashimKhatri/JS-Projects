const dob = document.querySelector('#dob')
const button = document.querySelector('.btn')
const result = document.querySelector('.result')

button.addEventListener("click", clickbutton)

function clickbutton(){
    let dobValue = document.querySelector('#dob').value
    
    let dob = new Date(dobValue)
    let today = new Date()

    let diff = today.getTime() - dob.getTime()

    let day = Math.floor(diff / (1000 * 60 * 60 * 24))
    let year = Math.floor(day / 365)

    result.innerHTML = `Your Age is ${year} years`
}