let res =document.querySelector('input#inumero')
let numeros = []


function somar(){
    numeros[0]=parseFloat(res.value)
    res.value =' '
    res.value = ' +'
}
function dividir(){
    numeros[0]=parseFloat(res.value)
    res.value = ' '
    res.value = ' /'
}

function calculo(){
   let total = 0
   numeros[1]= Number(res.value)

    if(res.value.includes('+')){
        total = numeros[0] / numeros[1]
        res.value = total
        return res.value
    }
    else if (res.value.includes('/')){
        
        numeros[1]= Number(res.value)
        total = numeros[0] + numeros[1]
        res.value = total
        return res.value
    }
}