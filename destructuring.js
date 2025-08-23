const colors = ["red","yellow","blue","crimsonRed"]
// const [color1,color2,color3] = colors;
// const[,,color3] = colors;
// console.log(color3)

const user = {
    name : "Sahil",
    age : 25,
    address : {
        city : "Bgh",
        Pin : 49200
    }
}

// const {username} = user
// console.log(username)

// destructuring does not work this way for objects 
// the variable being declared should have the name as the key being acccesed
// how to use diff naming

// const {name:username, age:userage} = user
// console.log(username)

// const {address} = user;
// const {city} = address;
// console.log(city)

// this is a slow way to access and also creates an unneccesary variable named adress

// const { address: { city}} = user
// console.log(city)

// const {3 : color4} = colors;
// console.log(color4)

// array is an object so it can also be destructured like an object

// destructuring a function
// function intro ({age}){
//     console.log(age)
// }

// intro(user)

function arr([a]){
    console.log(a)
}

arr(colors)