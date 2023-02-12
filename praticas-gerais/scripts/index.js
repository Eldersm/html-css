let res =document.querySelector('input#inumero')
let numeros = []
let header =document.querySelector('header#cabe')
header.createElement('img')


function somar(){
    numeros[0]=parseFloat(res.value)
    res.value =' '
    res.value = ' +'
}
function dividir(){
    numeros[0]=parseFloat(res.value)
    res.value = ' '
    res.value = '/'
}
function subtrair(){
    numeros[0]=parseFloat(res.value)
    res.value = ' '
    res.value = '-'
}
function multiplicar(){
    numeros[0]= parseFloat(res.value)
    res.value = ' '
    res.value = '*'
}
function limpa(){
    let limpa = res.value
    res.value = limpa.substr(0,limpa.length -1)
    res.focus()

}


function calculo(){
   let total = 0
   numeros[1]= Number(res.value)
   let limpa = res.value
    if(res.value.includes('+')){
        res.value = limpa.substr(1)
        total = numeros[0] + numeros[1]
        res.value = total
        res.focus()
        return res.value
    }
    else if (res.value.includes('/')){
        res.value = limpa.substr(1)
        numeros[1]= Number(res.value)
        total = numeros[0] / numeros[1]
        res.value = total
        res.focus()
        return res.value
    }else if(res.value.includes('-')){
        res.value = limpa.substr(1)
        numeros[1]=Number(res.value)
        total=numeros[0] - numeros[1]
        res.value = total
        res.focus()
        return res.value
    }else if (res.value.includes('*')){
        res.value = limpa.substr(1)
        numeros[1]=Number(res.value)
        total = numeros[0] * numeros[1]
        res.value = total
        res.focus()
        return res.value


    }
}