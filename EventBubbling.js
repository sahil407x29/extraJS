let pink = document.querySelector('.pink')
let green = document.querySelector('.green')
let blue = document.querySelector('.blue')


document.addEventListener('click',()=> {
    console.log('5. Window triggered')
}, {capture: true})
// true reverse the propagation and makes it seem like the bubbling went from big to small

document.body.addEventListener('click',()=> {
    console.log('4. body triggered')
}, {capture: true ,once:true})
// using once true limits the eventlistener to being called only once  

pink.addEventListener('click',()=> {
    console.log('3. pink triggered')
})
green.addEventListener('click',()=> {
    console.log('2. green triggered')
})
blue.addEventListener('click',()=> {
    console.log('1. blue triggered')
})

// event bubbling or propagating from small to big 
// it propagates from the element itself to its parent and to the window
blue.addEventListener('click',(e)=> {
    e.stopPropagation()
    // stops bubbling 
    console.log('blue triggered')
})
