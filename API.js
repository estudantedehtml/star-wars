///////////TRATANDO API
'use stric';
const pesquisar = async() => {
    var formulario = document.querySelector('form')
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
    })
    ///refreshOff
    /////API 1
    var numero = document.getElementById('number').value
    if(numero == ""){
    } else {
    const pesquisar = `https://swapi.dev/api/people/${numero}`
    const dados = await fetch(pesquisar).then()
    var nome = document.getElementById('content')
    ////API 2
    const resultado = await dados.json() 

    const pesquisar1 = `https://swapi.dev/api/planets/${numero}`
    const dados1 = await fetch(pesquisar1).then()
    fetch(pesquisar1).then(function(response) {
        if (response.status == '404') {
            nome.innerHTML = '<p>Posição não encontrada, Tente novamente</p>'
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
    nome.innerHTML += `<p>Gravidade: ${resultado1.gravity}</p>`

}
}
document.getElementById('pesquisar').addEventListener('click', pesquisar)
///////////API