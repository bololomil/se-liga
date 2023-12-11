const frm = document.querySelector("form")
const resp =document.querySelector("pre")

//ouvinte
frm.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const valopr = Number(frm.invalor.value)
    const num = Number(frm.inpalcela.value)
    const valorParcela = Math.floor(valor /num)
    let valorFinal = valorParcela + (valor % num)
    let reposta= ""
    for(let i = 1; i < num; i++){
        resposta = reposta + i + "ª Parcela: R$" + valorParcela.toFixed(2) + "\n"
    }
    resposta = resposta + num + "ª Parcel: R$" + valorFinal.toFixed(2)
    resp.innerText= resposta
})