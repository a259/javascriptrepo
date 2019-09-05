
//- Challenge 1:
//  Research on the following methods: 
//  shift(), unshift(), slice(), splice(), (and many more).
//  Create a program to demonstrate the uses of each method, some of these
//  you may need more than one example. (Pay attention: not all methods would
//  permanently updates/make changes to the arrays themselves.
'See arrays.js file for this very thing i did'

//- Challenge 2: 
//  Check out the Array constructor Array(). Research on the differences between [ ] 
//  and Array(), i.e. ['John'] vs Array('John') and [10] vs Array(10)
'The Array() constructor creates empty arrays to be assigned values to later on'
'Literal array assignment i.e.: let nums = [1,2,3] populates the array at creation'
ar1 = [1,2,3,4];//populated array of 4 numbers
ar2 = Array(4);//empty array
ar2[3] = 'cat';//empty array up until the 4th element now == 'cat'

//- Challenge 3:
//  Check out the .map() method and create a few examples on the uses of this method.
let nums = [0,1,2,3,4,5,6,7,8,9];
const sq = (n) => {
    return n*n
}
console.log(nums.map(sq));