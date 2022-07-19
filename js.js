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
'use strict';

var btnSubmit = document.getElementById('pesquisar');

const pesquisar = async () => {
    var formulario = document.querySelector('form')
    const resultContentElement = document.getElementById('content')

    formulario.addEventListener('submit', function(e) {
        e.preventDefault()
    })

    var numero = document.getElementById('number').value

    if (numero) {
        startLoading();

        const personEndpoint = `https://swapi.dev/api/people/${numero}`
        const planetEndpoint = `https://swapi.dev/api/planets/${numero}`

        const personPromise = await fetch(personEndpoint)
        const planetPromise = await fetch(planetEndpoint)

        clearResultContent()

        if (personPromise.status !== 200) {
            addTextInResultContent('Posição não encontrada, tente novamente.');
        } else {
            const person = await personPromise.json()
            const planet = await planetPromise.json()

            addTextInResultContent(`Nome: ${person.name}`);
            addTextInResultContent(`Altura: ${person.height}`);
            addTextInResultContent(`Idade: ${person.birth_year}`);

            addTextInResultContent(`Planeta: ${planet.name}`);
            addTextInResultContent(`Terreno: ${planet.terrain}`);
            addTextInResultContent(`Gravidade: ${planet.gravity}`);
        }

        endLoading();
    }

    function addTextInResultContent(text) {
        const newParagraph = document.createElement('p');
        newParagraph.innerText = text;
        resultContentElement.appendChild(newParagraph);
    }

    function clearResultContent() {
        resultContentElement.innerHTML = '';
    }

    function startLoading() {
        btnSubmit.innerHTML = "Carregando...";
    }

    function endLoading() {
        btnSubmit.innerHTML = "Pesquisar";
    }
}

btnSubmit.addEventListener('click', pesquisar)
///////////API