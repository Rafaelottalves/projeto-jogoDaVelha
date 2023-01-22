import { endGame } from "./fim_de_jogo"

let btn_começar = document.querySelector('#container-conteudo button')

function executar() {
    let blocos = [...document.querySelectorAll('#tabela td')]
    let msg_maquina = document.getElementById('msg-maquina')
    
    blocos.forEach((bloco) => {
        bloco.addEventListener('click', () => {
            if(bloco.innerHTML == 'O') {
                bloco.innerHTML == 'O'
            } else if(bloco.innerHTML == '') {
                bloco.innerHTML = 'X'

                let livre = []
                let newBlocos = []

                blocos.forEach((bloco) => {
                    if(bloco.innerHTML == '') {
                        livre.push(true)
                        newBlocos.push(bloco)
                    } else {
                        livre.push(false)
                    }
                })

                if(!(livre.includes(true) == false)) {
                    msg_maquina.innerHTML = 'Pensando...'
                }

                if(livre.includes(true) == false) {
                    console.log('deu velha')
                    endGame('Empate', 'Parece que deu velha, você e a maquina empataram')
                }

                setTimeout(() => {
                    msg_maquina.innerHTML = ''

                    if(!(livre.includes(true) == false)) {
                        let posAleatoria = Math.floor(Math.random() * newBlocos.length)
                        newBlocos[posAleatoria].innerHTML = 'O'
                    }
                }, 800)
            }
        })
    })
}

btn_começar.addEventListener('click', executar)
