let interval
let time = document.querySelector('#time')

let start = document.querySelector('#start')
let pause = document.querySelector('#pause')
let reload = document.querySelector('#reload')

let mil = document.querySelector('#mil')
let seg = document.querySelector('#seg')
let min = document.querySelector('#min')

let miljs = 0
let segjs = 0
let minjs = 0

let paused = true

//adicionando evento para o botao de iniciar
start.addEventListener('click', startTime)

//botao de iniciar
function startTime(){
    
//clearInterval para evitar que o botao de start empilhe
    clearInterval(interval)

    interval = setInterval(() => {

//com o if eu fiz a condição da qual o cronometro pode começar. Se a variavel paused for diferente do true, ele inicia somando os milesimos miljs
        if(!paused){
        miljs += 1
        }

        if(miljs == 100){
            miljs = 0
            segjs++
        }
        
        if(segjs == 60){
            segjs = 0
            minjs++
        }

//aqui eu adicionei o que estava acontecendo no js para o html, para aparecer o tempo contando
        mil.innerHTML = zeroTime(miljs)
        seg.innerHTML = zeroTime(segjs)
        min.innerHTML = zeroTime(minjs)
//poderia ser usado textContent em vez de innerHTML

    }, 10);

    paused = false

}

//função para adicionar os zeros no cronometro quando o  numero for menor que 10
function zeroTime(time){
    if (time < 10){
        return `0${time}`
    } else {
        return time
    }
}

//adicionando evento para o botao de pause
pause.addEventListener('click', pauseTime)

//botao de pause
function pauseTime(){
    paused = true
}

//adicionando evento para o botao de reload
reload.addEventListener('click', reloadTime)

//botao de reload
function reloadTime(){

    miljs = 0
    segjs = 0
    minjs = 0

    paused = true
}












/*
⠀⠀   ⢀⡴⠁⠀ ⣿⡏⠀⠱⣄
⠀⠀⢀⣴⡟⠁⠀⠀⠀⣿⡇⠀⠀⠀⠙⣷⣄
⠀⠀⠙⢿⣷⣄⠀⠀⠀⣿⡇⠀⠀⢀⣴⣿⠋
⠀⠀⠀⠀⠙⢿⣷⣄⠀⢻⡇⢀⣴⣿⠋
⠀⠀⠀⠀⠀⠀⠈⠻⣷⣾⣷⡿⠋
⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣷⣄
⠀⠀⠀⠀⠀⢀⣶⣿⠟⢹⣏⠻⢿⣷⣄
⠀⠀⠀⢀⣼⣿⠟⠁⠀⢸⣿⠀⠈⠙⢿⣷⣄
⠀⠀⣴⣿⡟⠁⠀⠀⠀⢸⣿⠀⠀⠀⠀⣹⣿⡷
⠀⠀⠈⠻⣿⣦⡀⠀⠀⢸⣿⠀⠀⢀⣼⣿⠏
⠀⠀⠀⠀⠈⠻⣿⣦⡀⢸⣿⠀⣴⣿⠟⠁
⠀⠀⠀⠀⠀⠀⠈⠻⣿⣾⣿⣾⡿⠃⠀
⠀⠀ ⠀⠀⠀⠀⠀⠀⠈⠻⡿⠋
"My honored brethen
We come together
To unite as one
Against those that are damned
We show no mercy
For we have none
Our enemies shall fall
As we uprise
To claim our fate
Now and forever
We'll be together
Love and hate"
*/