const pressGrindBeans = () => {
    console.log('Grinding for 20 seconds');
}
pressGrindBeans();

const pressAddCreamer = (bool) => {
    if (bool == true) {
        console.log('Adding creamer')
    } else {
        console.log('No creamer selected')
    }
}
pressAddCreamer(true);

const pressAddSugar = (byDefault=0) => {
    console.log(`Adding ${byDefault} sugars`);
}
pressAddSugar();
pressAddSugar(1);

let coffeeIsGrinding = false;
const pressGrindBeans2 = () => {
    if (coffeeIsGrinding == true) {
        console.log('Stopping the grind');
        coffeeIsGrinding = false;
    } else {
        console.log('Grinding is about to begin');
        coffeeIsGrinding = true
    }
}
pressGrindBeans2();pressGrindBeans2();

let cashWithdrawal = (amount, accnum) => {
    console.log(`Withdraw ${amount} from ${accnum}`)
}
cashWithdrawal(234,4567890);

const takeOrder = (size, drinkType) => {
    console.log(`Order received: ${size} ${drinkType}`)
}
takeOrder('Tall', 'Latte');

let accnumber = 50449921;
const cashWithdrawal2 = (amount, accnum) => {
 console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal2(300, accnumber);
cashWithdrawal2(30, 50449921);
cashWithdrawal2(200, 50447921);

const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7,3);
console.log(addUp(2,5));

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};   
console.log("The temperature is " + getFahrenheit(15) + "°F");

//arrow declaration is es6 thus better but heres alternates

function square(number) {//declaration#1
    return number * number;
}
console.log(square(5))

function factorial (n) {//declaration#2
    if ( (n===0) || (n===1) ) {
        return 1;
    } else {
        return (n * factorial(n-1))
    }
}
console.log(factorial(10))

const square2 = function (n) {//expression
    return number * number;
} //create variable that stores an anonymous function. theres the keyword:'function'
//but no variable name after it, which is what makes the function anonymous

const square3 = (number) => {
    return number * number;
}//arrow function syntax, modern/es6, preferred

'Activity: take this code and turn it into arrow function syntax'
function factorial2 (n) {//declaration#2
    if ( (n===0) || (n===1) ) {
        return 1;
    } else {
        return (n * factorial(n-1))
    }
}
const factorial3 = (n) => {
    if ( (n===0) || (n===1) ) {
        return 1;
    } else {
        return (n * factorial(n-1))
    }
}

let orderCount = 0; //refactored to include two parameters
const takeOrder2 = (topping, topping2) => {
    console.log(`Pizza with ${topping} and ${topping2}`);
    orderCount++;
}
takeOrder2('ham', 'pineapple');

databaseEntryForPin = 12345 
databaseEntryForBal = 500
const cashMachine = (pin, amount) => {
    if (pin == databaseEntryForPin) {
        console.log('Welcome to Namebank.')
    } else {
        console.log('Invalid Pin Number.');
        return
    }
    if (amount <= databaseEntryForBal) {
        console.log(`£${amount} dispensed.`)
    } else {
        console.log('Insufficient funds.');
        return
    }
}
cashMachine(12345, 501)
cashMachine(12340, 499)

const sandwichOrder = (f1,f2,f3,f4,f5) => {
    console.log(`We are preparing your order for one sandwich with:
${f1}, ${f2}, ${f3}, ${f4}, ${f5}, thank you.`)
}
sandwichOrder('chicken','bacon','mayo','avocado','lettuce')
