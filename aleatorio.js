function aleatorio(lista){
    const posicao = Math.random()*lista.length
    console.log(posicao)
    return(lista[posicao])
}