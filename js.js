
///para de ler meus codigo victor
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

///////////ANIMAÇÕES
////////////////////

///////////TRATANDO API
'use stric';



const pesquisar = async() => {
    var formulario = document.querySelector('form')
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
    })

    ///refreshOff
    

    var numero = document.getElementById('number').value
    if(numero == ""){
    } else {
    const pesquisar = `https://swapi.dev/api/people/${numero}`
    const dados = await fetch(pesquisar).then()
    fetch(pesquisar).then(function(response) {
        if (response.status == '404') {
            nome.innerHTML = '<p>Ops!!</p>'
        }
    }).catch(function(error) {
        console.log('Catch error: ', error)
    });
    var nome = document.getElementById('content')
    const resultado = await dados.json() 

    const pesquisar1 = `https://swapi.dev/api/planets/${numero}`
    const dados1 = await fetch(pesquisar1).then()
    fetch(pesquisar1).then(function(response) {
        if (response.status == '404') {
            nome.innerHTML = '<p>Ops!!</p>'
        }
    }).catch(function(error) {
        console.log('Catch error: ', error)
    });
    const resultado1 = await dados1.json() 
    nome.innerHTML = `<p>Nome: ${resultado.name}</p>`
    nome.innerHTML += `<p>Altura: ${resultado.height}</p>`
    nome.innerHTML += `<p>Idade: ${resultado.birth_year}</p>`
    nome.innerHTML += `<p>Planeta: ${resultado1.name}</p>`
    nome.innerHTML += `<p>Terreno: ${resultado1.terrain}</p>`
    nome.innerHTML += `<p>Gravidade: ${resultado1.gavity}</p>`
}
}



document.getElementById('pesquisar').addEventListener('click', pesquisar)












///////////API
