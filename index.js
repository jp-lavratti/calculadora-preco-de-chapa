const inputLargura = document.getElementById("largura")
const inputAltura = document.getElementById("altura")
const inputPrecoQuiloChapa = document.getElementById("preco-quilo")
const selectEspessura = document.getElementById("espessura")
const botão = document.getElementById("botao")
const precoTexto = document.getElementById("precoFinal")

botão.addEventListener("click",()=>{
    let pesoChapa = (inputLargura.value*0.001)* (inputAltura.value*0.001) * selectEspessura.value
    let precoChapa=pesoChapa*inputPrecoQuiloChapa.value
    precoTexto.innerHTML=`Preço: R$:${precoChapa.toFixed(2)}`
    precoTexto.classList.remove('hidden')
})
