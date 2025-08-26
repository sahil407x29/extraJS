const userInput = document.querySelector('#username')
const Paragraph = document.querySelector('p')
let inputValue;
let form = document.querySelector("[data-form]")
// userInput.addEventListener("click",()=>
// {
//     console.log("input clicked")
// })

// userInput.addEventListener("dblclick",()=>
//     {
//         console.log("input event doubleclicked")
//     })

// userInput.addEventListener("input",(e)=>
//         {
//             console.log(e.target.value)
//             Paragraph.textContent = e.target.value;
//         })

userInput.addEventListener("change", (e) =>
{
    console.log(e.target.value)
    inputValue= e.target.value
})

// userInput.addEventListener("focus",(e)=>
// {
//     console.log(e);
// })

// userInput.addEventListener("blur", (e)=>{
//     console.log(e);
// })

// form.addEventListener('click',(e)=>
// {
//     e.preventDefault();
//     console.log("no submitting allowed")
// })
 
form.addEventListener("submit",(e) => {
    e.preventDefault()
    const myFormData = new FormData(form)
    // console.log(myFormData)
    for(const p of myFormData.entries()){
        console.log(p)
    }
})
