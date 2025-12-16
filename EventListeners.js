document.addEventListener("DOMContentLoaded", () => {
const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
function sayHi() {
    console.log('hiii');
}
card.addEventListener("click",sayHi)
h1.onclick = sayHi
function Cloner(){
    const cloned = card.cloneNode();
    document.body.appendChild(cloned);

}

// card.addEventListener("click",Cloner)
let count = 2;
function Cloner2() {
    const newCard = document.createElement('div')
    newCard.innerText = count
    newCard.classList.add('card')
    count++;
  
    console.log(newCard)
    document.body.appendChild(newCard)
}

card.addEventListener("click",Cloner2)
}
)