let res =document.querySelector('input#inumero')

function calculo(){
    const num1 = 5
    const num2 = 8
    return num1 + num2
}
res.textContent =`${calculo()}`
console.log(calculo())
res.value = 'olá mundo!'