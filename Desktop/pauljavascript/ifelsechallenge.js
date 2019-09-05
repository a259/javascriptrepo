//Slides #1
let password = 'thisisapassword';
if (password.length < 9) {
    console.log('Password too short')
} else {
    console.log('Password is ' + password)
}

//Slides #2
let numA = Math.floor(Math.random()*100);
// console.log(num);
if (numA % 3 == 0 || numA % 5 == 0) {
    console.log('This number is divisible by 3 or 5')
} else {
    console.log("This number is NOT!divisible by 3 or 5")
}

//Slides #3
let numB = Math.floor(Math.random()*100);
// console.log(num);
if (numB % 3 == 0 && numB % 5 == 0) {
    console.log('fizz buzz')
} else if (numB % 3 == 0) {
    console.log('fizz')
} else if (numB % 5 == 0) {
    console.log('buzz')
} else {
    console.log('*crickets*')
}

//Moodle extras #1
time = 7 //or 8 or 9
placeOfWork = 'placeOfWork';
townOfHome = 'townOfHome';
if (time == 7) {
    console.log(`I am at ${townOfHome}`)
} else if (time == 8) {
    console.log(`I am in between ${townOfHome} and ${placeOfWork}`)
} else if (time == 9) {
    console.log(`I am at ${placeOfWork}`)
} else {
    console.log('Where am i?')
}

//Moodle extras #2
let bigStr = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
aa = bigStr.lastIndexOf('a');
ee = bigStr.lastIndexOf('e');
ii = bigStr.lastIndexOf('i');
oo = bigStr.lastIndexOf('o');
uu = bigStr.lastIndexOf('u');
if (aa > ee && aa > ii && aa > oo && aa > uu) {
    console.log(`The last vowel (a) is at index position ${aa}.`)
} else if (ee > aa && ee > ii && ee > oo && ee > uu) {
    console.log(`The last vowel (e) is at index position ${ee}.`)
} else if (ii > aa && ii > ee && ii > oo && ii > uu) {
    console.log(`The last vowel (i) is at index position ${ii}.`)
} else if (oo > aa && oo > ee && oo > ii && ee > uu) {
    console.log(`The last vowel (o) is at index position ${oo}.`)
} else if (uu > aa && uu > ee && uu > ii && uu > oo) {
    console.log(`The last vowel (u) is at index position ${uu}.`)
} else {
    console.log('There are no vowels in this string.')
}

//Moodle extras #3
let word = 'FIFA'; //rm A
let wordStart = word.charAt(0);
let wordEnd = word.charAt(word.length - 1);
if (wordStart == wordEnd) {
    console.log(true)
} else {
    console.log(false)
}

//Moodle extras #4
let num1 = 27;
let num2 = 33;
let numx = num1+num2
if (numx % 2 == 0) {
    console.log(`The Sum of ${num1} and ${num2} is ${numx} and is EVEN.`)
} else {
    console.log(num1*num2)
}

//Moodle extras #5
let numC = 100000001;
let numD = numC.toString();
if (numD.length % 2 == 0) {//even
    half1 = numD.slice(0, numD.length/2+1);
    half2 = numD.slice(numD.length/2-1, numD.length);
    half2 = half2.split("").reverse().join("");
    if (half1 == half2) {
        console.log('This is a palindromic number.')
    } else {
        console.log('This is not a palindromic number.')
    }
} else {//odd
    half1 = numD.slice(0,numD.length/2+1);
    half2 = numD.slice(numD.length/2, numD.length);
    half2 = half2.split("").reverse().join("");
    if (half1 == half2) {
        console.log('This is a palindromic number.')
    } else {
        console.log('This is not a palindromic number.')
    }
}

//Moodle extras #6
'This code is implemented in the file called grids.js';
