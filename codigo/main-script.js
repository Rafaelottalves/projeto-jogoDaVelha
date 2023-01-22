let btn_começar = document.querySelector('#container-conteudo button')

function executar() {
    let blocos = [...document.querySelectorAll('#tabela td')]
    let msg_maquina = document.querySelector('#msg-maquina')
    let tela = document.getElementById('tela')

    let livre = []

    function fimDeJogo() {
        let msg_fim = document.createElement('p')
        msg_fim.setAttribute('class', '')

        msg_fim.innerHTML = ''

        tela
    }

    setInterval(() => {
        livre = []

        blocos.forEach((bloco) => {
            if(bloco.innerHTML != '') {
                livre.push(false)
            } else {
                livre.push(true)
            }
        })

        if(livre.includes(true) == false) {
            fimDeJogo()
        }
    }, 5000)
}

btn_começar.addEventListener('click', executar)


/* 
if(
                    blocos[0].innerHTML == 'X' && 
                    blocos[1].innerHTML == 'X' &&
                    blocos[2].innerHTML == 'X' ||

                    blocos[0].innerHTML == 'X' && 
                    blocos[3].innerHTML == 'X' &&
                    blocos[6].innerHTML == 'X' ||

                    blocos[6].innerHTML == 'X' && 
                    blocos[7].innerHTML == 'X' &&
                    blocos[8].innerHTML == 'X' ||

                    blocos[8].innerHTML == 'X' && 
                    blocos[5].innerHTML == 'X' &&
                    blocos[2].innerHTML == 'X' ||

                    blocos[0].innerHTML == 'X' && 
                    blocos[4].innerHTML == 'X' &&
                    blocos[8].innerHTML == 'X' ||

                    blocos[2].innerHTML == 'X' && 
                    blocos[4].innerHTML == 'X' &&
                    blocos[6].innerHTML == 'X'
                ) {
                    console.log('Jogador ganhou')
                } else if(
                    blocos[0].innerHTML == 'O' && 
                    blocos[1].innerHTML == 'O' &&
                    blocos[2].innerHTML == 'X' ||

                    blocos[0].innerHTML == 'O' && 
                    blocos[3].innerHTML == 'O' &&
                    blocos[6].innerHTML == 'O' ||

                    blocos[6].innerHTML == 'O' && 
                    blocos[7].innerHTML == 'O' &&
                    blocos[8].innerHTML == 'O' ||

                    blocos[8].innerHTML == 'O' && 
                    blocos[5].innerHTML == 'O' &&
                    blocos[2].innerHTML == 'O' ||

                    blocos[0].innerHTML == 'O' && 
                    blocos[4].innerHTML == 'O' &&
                    blocos[8].innerHTML == 'O' ||

                    blocos[2].innerHTML == 'O' && 
                    blocos[4].innerHTML == 'O' &&
                    blocos[6].innerHTML == 'O'
                ) {
                    console.log('maquina ganhou')
                }
*/
/* bloco.addEventListener('click', () => {
        bloco.innerHTML = 'X'
        msg_maquina.innerHTML = 'Pensando...'

        let livre = []

        blocos.forEach((bloco) => {
            if(bloco.innerHTML != '') {
                livre.push(false)
            } else {
                livre.push(true)
            }
        })

        if(livre.includes(true) == false) {
            console.log('Deu velha')
        } else {
            setTimeout(() => {
                msg_maquina.innerHTML = ''
                let posAleatoria = Math.floor(Math.random() * blocos.length)                
    
                while(blocos[posAleatoria].innerHTML != '') {
                    posAleatoria = Math.floor(Math.random() * blocos.length)
                }
    
                blocos[posAleatoria].innerHTML = 'O'
            }, 600)
        }
    }) */
