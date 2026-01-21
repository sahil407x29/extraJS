// document.querySelector('.parent').addEventListener('click',(e)=>{
//     console.log(e.target.className)
//     window.location.href = '/' + e.target.className

//     // window.location.href, it returns the full address
//     //  (URL) of the page currently loaded in the browser
// })

document.querySelector('.form2').addEventListener('input',(e)=> {
            if(e.target.dataset.uppercase !=undefined){
              e.target.value =  e.target.value.toUpperCase()
            }
            console.log(e)
})

