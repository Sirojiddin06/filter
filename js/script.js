const btnFrance = document.querySelector('#france')
const btnGermany = document.querySelector('#germany')
const btnEngland = document.querySelector('#england')

const form = document.querySelector('#countryForm')

const franceContainer = document.querySelector('#franceContainer')
const germanyContainer = document.querySelector('#germanyContainer')
const englandContainer = document.querySelector('#englandContainer')

function showFrance(){
    if (franceContainer.classList.contains('d-none'))
    {
        franceContainer.classList.remove('d-none')
        germanyContainer.classList.add('d-none')
        englandContainer.classList.add('d-none')
    }
}

function showGermany(){
    if (germanyContainer.classList.contains('d-none'))
    {
        franceContainer.classList.add('d-none')
        germanyContainer.classList.remove('d-none')
        englandContainer.classList.add('d-none')
    }
}

function showEngland(){
    if (englandContainer.classList.contains('d-none'))
    {
        franceContainer.classList.add('d-none')
        germanyContainer.classList.add('d-none')
        englandContainer.classList.remove('d-none')
    }
}