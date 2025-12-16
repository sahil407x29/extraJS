let pluscard = document.querySelector('#sample-card')
let card = document.querySelector('.card')
let form = document.querySelector("[dataform")

let count = 1;

pluscard.addEventListener('click',()=>{
    const newCard = card.cloneNode(true);
    newCard.textContent = count++;
    console.log("event triggered")
    document.body.appendChild(newCard)
})
// setInterval(()=> {
//     console.log("form submitted")
//     form.submit()
// },2000)

// setInterval(()=> {
//     // console.log("form submitted")
//     form.reset()
// },3000)
// setInterval(() => {
//     pluscard.click();
// },100)
// → Calls the given function every 100 ms (10 times per second).


// const IntervalID = setInterval(() => {
//     if(count>999){
//         clearInterval(IntervalID)
//       }
//     pluscard.click();
// },10)
// sets interval returns a interval id