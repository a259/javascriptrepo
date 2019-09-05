//Challenge 1: Let's go back to our naughts and crosses board. Create a function
//that takes 9 parameters and logs our naughts and crosses board to the console.
let oxo = (a=' ',b=' ',c=' ',d=' ',e=' ',f=' ',g=' ',h=' ',i=' ') => {
console.log(' a | b | c '.replace('a',a).replace('b',b).replace('c',c));
console.log('---|---|---');
console.log(' d | e | f '.replace('d',d).replace('e',e).replace('f',f));
console.log('---|---|---');
console.log(' g | h | i '.replace('g',g).replace('h',h).replace('i',i));
if ( (a == 'x' || a == 'o') && (a == b && b == c) ) {
    console.log('Player Wins'); return;
}}//do one of these tests for every horizontal, vertical and diagonal (8 total).
oxo('x','x','x');

//Challenge 2: Create a function, takes number as parameter, converts to string.
const num2str = (number) => {
    return number.asString()
}

//Challenge 3: Create a function that takes a number as a parameter and adds one.
const addOne = (number) => {
    return number+1
}

//Challenge 4: Create a function, takes a number as a parameter and subtracts one
const minusOne = (number) => {
    return number-1
}

//Challenge 5: Create function takes two numbers as parameters and adds them.
const adder = (number1, number2) => {
    return number1+number2
}

// Challenge 6: Create function, two numbers as params, subtracts second from first
const subtractor = (number1, number2) => {
    return number1-number2
}

//Challenge 7: Create function, takes two numbers as params, multiplies them
const multiplier = (number1, number2) => {
    return number1*number2
}

//Challenge 8: takes two integer params, divides first by second
const divider = (number1, number2) => {
    return number1/number2
}

//Challenge 9: Create function, takes number as param, multiplies it by itself
const squarer = (number) => {
    return number*number
}

//Challenge 10: Create a function that takes two numbers and an operator as params.
//It should return a print out of the sum e.g. “1 + 2 = 3” or “4 x 6 = 24”.
const customMaker = (number1, number2, symbol) => {
    if (symbol == '+') {
        return number1 + number2
    }
    if (symbol == '-') {
        return number1 - number2
    }
    if (symbol == '*') {
        return number1 * number2
    }
    if (symbol == '/') {
        return number1 / number2
    }
}

//Challenge 11: Create function, two nums as params, checks first greater than second
const xgty = (x,y) => {
    return x > y
}

//Challenge 12: Create function, two nums as params, checks first less than second
const xlty = (x,y) => {
    return y < x
}

//Challenge 13: Create function, takes two nums as params, checks if equal
const xeqy = (x,y) => {
    return x == y
}

//Challenge 14: Create function, takes two nums as params, returns smaller of the two
const smaller = (x,y) => {
    if (x < y) {
        return x
    } else {
        return y
    }}

//Challenge 15: Create function, takes two nums as params, returns larger
const larger = (x,y) => {
    if (x > y) {
        return x
    } else {
        return y
    }}

//Challenge 16: Create function, takes num as param and checks if it is even.
const isEven = (x) => {
    if (x % 2 == 0) {
        return true
    }
}

//Challenge 17: Create function, takes num as param, and checks if it is odd.
const isOdd = (x) => {
    if (x % 2 == !0) {
        return true
    }
}

//Challenge 18: Create function, takes num between 0:100, returns a grade based 
//on this system "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%.
const grade = (x) => {
    if (x >= 90 && x <= 100) {
        return 'Grade A'
    }
    if (x >= 80 && x <= 89) {
        return 'Grade B'
    }
    if (x >= 70 && x <= 79) {
        return 'Grade C'
    }
    if (x >= 60 && x <= 69) {
        return 'Grade D'
    }
    if (x >= 0 && x <= 59) {
        return 'Grade F'
    } else {
        return 'Invalid'
    }
}
console.log(grade(77));

//Challenge 19: Create function, takes two strings, returns strings concatenated.
const concat = (x,y) => {
    return x+y
}

//Challenge 20: Create function, counts the number of vowels and returns result.
const vowelCount = (x) => {
    c = 0;
    y = x.split("")
    for (i=0;i<y.length;i++) {
        if ( ["a","e","i","o","u"].includes(y[i]) == true ) {
            c++
        }
    }
    return c
}
console.log(vowelCount("aieou aieou aieou aieou aieou john madden"))