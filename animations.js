///////////ANIMAÇÕES
function stars() {
    let count = 50
    let scene = document.querySelector('.scene')
    let i = 0
    while(i < count) {
        let star = document.createElement('i')
        let x  = Math.floor(Math.random() * window.innerWidth)
        let duration = Math.random() * 1
        let h = Math.random() * 100
        star.style.left = x + 'px'
        star.style.width = 1 + 'px'
        star.style.height = 50 + h + 'px'
        star.style.animationDuration = duration + 's'
        scene.appendChild(star)
        i++
    }
}
stars()
let fecharbtn = document.getElementById('fecharbtn')
let fecharfor = document.getElementById('fecharfor')
let clicar = document.getElementById('nave')
let efeito = document.querySelector('.rocket')
let aperte = document.querySelector('h3')
function subir() {
    efeito.classList.add('subir')
    clicar.classList.add('subir')
    fecharbtn.classList.add('subir')
    fecharfor.classList.add('subir')
    aperte.classList.add('subir')
}
function fecharjanela() {
    efeito.classList.remove('subir')
    clicar.classList.remove('subir')
    fecharbtn.classList.remove('subir')
    fecharfor.classList.remove('subir')
    aperte.classList.remove('subir')
}
clicar.addEventListener('click', subir)
fecharbtn.addEventListener('click',fecharjanela)
