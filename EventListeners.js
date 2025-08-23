document.addEventListener("DOMContentLoaded", () => {
const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
function sayHi() {
    console.log('hiii');
}
// card.addEventListener("click",sayHi)
// h1.onclick = sayHi
// function Cloner(){
//     const cloned = card.cloneNode();
//     document.body.appendChild(cloned);

// }
// card.addEventListener("click",Cloner

function Cloner2() {
    const newCard = document.createElement("div");
    newCard.classList.add('card')
    console.log(newCard)
    document.body.appendChild(newCard)
}

card.addEventListener("click",Cloner2)
})