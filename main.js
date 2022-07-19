const ERROR_MESSAGES = {
    404: 'Posição não encontrada, tente novamente',
    400: 'Requisição incorreta, tente novamente'
}

const btnSubmit = document.getElementById('pesquisar');

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
            addTextInResultContent(ERROR_MESSAGES[personPromise.status]);
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