const addCardBtn = document.querySelector('#sample-card')
const container = document.querySelector('.container')



let count = 1;
const cardsList = document.querySelectorAll('.card')

addCardBtn.addEventListener('click',()=> {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++;
    container.append(newCard)
     
    // newCard.addEventListener('click',()=> {
    //     newCard.remove();
    // })
   // this method is not good because it will create an event listener
    //  for every card that is added to the Dom
    // so instead of assigning a listener on every children we put one directly 
    // one the parent and do the same function
    // this is called event delegation

})


container.addEventListener('click',(e)=> {
    if(e.target.classList.contains('card')){
        e.target.remove();
    }
    
})

// cardsList.forEach(((cards)=> {
//     cards.addEventListener('click',()=>{
//         cards.remove()
//     })
// }))