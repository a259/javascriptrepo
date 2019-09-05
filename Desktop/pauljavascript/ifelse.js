// add an equals symbol to the beneath and remove one from the above
// if (1 === '1') {
//     console.log(true)
// } else {
//     console.log(false)
// }
// if (1 != '1') {
//     console.log(true)
// } else {
//     console.log(false)
// }

// age = 17;
// if (age < 18) {
//     console.log("You aren't old enough")
// } else if (age > 150) {
//     console.log("You are a galapagos turtle")
// } else {
//     console.log("Yes I can serve you")
// }

// let age = 19;
// let country = 'UK';
// if (age > 17 && country == 'UK') {
//     console.log("What'll it be?")
// } else {
//     console.log("Sorry, you're too young to be served in the UK.")
// }

// day = "Thursday";
// if (day == 'Saturday' || day == 'Sunday') {
//     console.log('Its weekend.')
// } else {
//     console.log('Its not weekend')
// }

let age = Math.random()*100
let priceChild = '8.00';
let priceAdult = '10.95';
let priceSenior = '7.50';
if (age < 18) {
    console.log(`Welcome to Goggleplex, your ticket is £${priceChild}`)
} else if (age > 17 && age < 60) {
    console.log(`Welcome to Goggleplex, your ticket is £${priceAdult}`)
} else {
    console.log(`Welcome to Goggleplex, your ticket is £${priceSenior}`)
}