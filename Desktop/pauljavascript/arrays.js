let coffeeOrder = [
    'Alex - Cortado',
    'Leona - Cortado',
    'Charlie - Whatevers new'
]
console.log(coffeeOrder);

let Data = ['Data1', 'Data2', 'Data3'];
console.log(Data[2]);

coffeeOrder.push('Donna - Espresso');
console.log(coffeeOrder[3]);

console.log(coffeeOrder.pop());
console.log(coffeeOrder);

coffeeOrder[2] = "Benny - Cappucino"; //overwritten
console.log(coffeeOrder);
console.log(coffeeOrder.length); //#items in array
console.log(coffeeOrder[2].length); //#chars in item[2] in array

favWebsites = ['Google', 'Bing', 'DuckDuckGo'];
favWebsites.push('Yandex');
favWebsites.push('Yahoo');
recycleBin = favWebsites.pop();
console.log(favWebsites);
console.log(recycleBin);

const shifter = (array=['x','y','z']) => {
    return array.shift()
}
console.log(shifter());

const unshifter = (array=['a','b','c']) => {
    len = array.unshift('x','y','z');
    return `Array length is now ${len}, first array item is ${array[0]}`
}
console.log(unshifter());

const fruitSplicerAndSlicer = (array = ['banana', 'orange', 'apple', 'peach', 'mango']) => {
    console.log(array);
    array.splice(1,2);'At position 0 remove 2 items';
    console.log(array);
    array.splice(2,1,'kiwi',"melon"); 'At [2] rm 1, and insert these strings';
    console.log(array);
    '.slice does not modify the list like splice does, similar to string.slice';
    return array.slice(1,3)
}
console.log(fruitSplicerAndSlicer());