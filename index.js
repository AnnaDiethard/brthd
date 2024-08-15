const textRow = document.querySelector('.text-row')
const potatoBlock = document.querySelector('.potato-block')
const letterBlock = document.querySelector('.letter-block')
const cardsBlock = document.querySelector('.cards-block')
const finalRow = document.querySelector('.final-row ')

const cardsArr = document.querySelectorAll('.card')

const letterCard = document.querySelector('#letterCard')
const letter = document.querySelector('#letter')
const cardTextTitle = document.querySelector('#cardTextTitle')
const cardTextDescription = document.querySelector('#cardTextDescription')

const firstBtn = document.querySelector('#firstBtn')
const secondBtn = document.querySelector('#secondBtn')
const thirdBtn = document.querySelector('#thirdBtn')

firstBtn.addEventListener('click', () => {
    firstBtn.classList.add('hide-class')
    textRow.classList.add('hide-class')

    function showPotato() {
        potatoBlock.classList.remove('hide-class')
    }
    setTimeout(showPotato, 1000);
})

secondBtn.addEventListener('click', () => {
    potatoBlock.classList.add('hide-class')
    letterBlock.classList.remove('hide-class')
})

cardsArr.forEach(el => {
    console.log('el', el)
    el.addEventListener('click', () => {
        el.classList.add('hide-class')
    })
});

letterCard.addEventListener('click', () => {
    cardTextTitle.classList.add('hide-class')
    cardsBlock.classList.add('hide-class')

    cardTextDescription.classList.remove('hide-class')
    letter.classList.remove('hide-class')
    thirdBtn.classList.remove('hide-class')
})

thirdBtn.addEventListener('click', () => {
    letterBlock.classList.add('hide-class')
    finalRow.classList.remove('hide-class')
})