const randomNumber = document.querySelector('.box-text')
const screenOne = document.querySelector('.screen_one')
const screenTwo = document.querySelector('.screen_two')
const btnPlay = document.querySelector('.btn-biscoit')
const btnReset = document.querySelector('.btnReset')
let phrasesBiscuit = [ 
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'

]
let randomMath = Math.floor(Math.random() * phrasesBiscuit.length)


btnPlay.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', HandleReset)
document.addEventListener('keydown', BtnEnter)


function handleTryClick(e) {
    e.preventDefault()

    randomMath = Math.floor(Math.random() * phrasesBiscuit.length)
    randomNumber.innerText = ` ${phrasesBiscuit[randomMath]} `

    randomNumber.classList.add('box-apparence')
    screenOne.classList.add('invisible')
    screenTwo.classList.remove('invisible')
    
}


function HandleReset(){
   

    screenOne.classList.remove('invisible')
    screenTwo.classList.add('invisible')
    randomNumber.classList.remove('box-apparence')

}

function BtnEnter(e){
    if(e.key == 'Enter' || 'Escape' && screenOne.classList.contains('invisible')){
        HandleReset()
    }
}

