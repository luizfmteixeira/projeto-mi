function atualizarTempo() {
    let horaAtual = new Date()
    const horaTeAmo = new Date("May 12, 2019 23:34:00")
    let diferencaMs = horaAtual - horaTeAmo

    let segundos = diferencaMs / 1000

    let anos = Math.floor(segundos / 60 / 60 / 24 / 30.4 / 12)
    segundos -= (anos * 60 * 60 * 24 * 30.4 * 12)
    let meses = Math.floor(segundos / 60 / 60 / 24 / 30.4)
    segundos -= (meses * 60 * 60 * 24 * 30.4)
    let dias = Math.floor(segundos / 60 / 60 / 24)
    segundos -= (dias * 60 * 60 * 24)
    let horas = Math.floor(segundos / 60 / 60)
    segundos -= (horas * 60 * 60)
    let minutos = Math.floor(segundos / 60)
    segundos -= (minutos * 60)
    segundos = Math.floor(segundos)

    console.log(`${anos} ${meses} ${dias} ${horas} ${minutos}:${segundos}`)


    let timer = document.querySelector('#timer')

    timer.innerHTML = `${anos} anos ${meses} meses ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`

}

setInterval(atualizarTempo, 1000)

