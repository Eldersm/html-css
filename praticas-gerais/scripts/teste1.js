let res =document.querySelector('input#inumero')

function num1(){
    return 1 

}
const num2 =() =>{
    return 2
}

function somar(){
    res.value = ' '
    res.value += `${num1()} + `

}


function calculo(){

     if(res.value = "+"){
        res.value = ' '
        res.value += `${num1()} + ${num2()} = ${num1() + num2()}`
   }
}
