//Challenge 1:
//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
const sum35 = () => {
    //make an array of numbers below 1000
    let numArray = [];
    let subArray = [];
    for (i = 1; i <= 999; i++) {
        numArray.push(i)
    }
    //checker function, is 3or5 a factor of x:
    const isFac35 = (x) => {
        if ( (x % 3 == 0) || (x % 5 == 0) ) {
            return true
        }
    }
    //process: if factors in, add to subArray
    for (i=0;i<numArray.length;i++) {
        if ( isFac35(numArray[i]) == true ) {
            subArray.push(numArray[i])
        }
    }
    //add all items in subArray to count
    let c = 0;
    for (i=0;i<subArray.length;i++) {
        c = c + subArray[i]
    }
    return c
}
console.log(sum35());

//Challenge 2: Take this string:
//“jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”.
//The word “hi” appears multiple times. Find the first and last occurrence of the
//word hi and log them to the console.
target = 'jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh';
subArray2 = [];
for (i=0;i<target.length-1;i++) {
    let x = target.slice(i,i+2);
    if (x == 'hi') {//indexOf, lastIndexOf, saves code, but not the spirit of it???
        subArray2.push(i)
    }}
console.log(subArray2); //whole array, of all index positions of occurences of 'hi'
console.log(subArray2[0]); //first index
console.log(subArray2[subArray2.length-1]); //last, better way yet to be found
console.log(target[25]+target[26]); //proof of accurate slicing

//Challenge 3:Take the string from problem 2 and print each letter out individually.
// for (i=0;i<target.length;i++) {
//     console.log(target[i])
// }
'Just comment out the above to see the result';

//Challenge 4:Take the string from problem 2, loop through the string and find out
//how many times the word hi appears and the indexes where it appears.
'Already in memory via the second challenge';
console.log(`The word hi appears ${subArray2.length} times at indices ${subArray2}`);

//Challenge 5: Create a function that checks if a number is a palindrome.
//Use this function to find the biggest palindrome less than 90283743503594.
'Done already: See the file ifelsechallenge.js, under //Moodle extras #5';

//Challenge 6: 
//This is a paragraph from Harry Potter 
longStr = `Non-magic people (more commonly known as Muggles) were particularly
afraid of magic in medieval times, but not very good at recognizing it. On the 
rare occasion that they did catch a real witch or wizard, burning had no effect
whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and
then pretend to shriek with pain while enjoying a gentle, tickling sensation.
Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself
to be caught no less than forty seven times in various disguises.`;
//Count how many words are in this paragraph (using code!).
console.log(longStr.split(' ').length);

//Challenge 7: Add the digits 19082: 1+9+0+8+2=20. Do that for this:
n = '371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331';
//ns = n.toString(); //lol, this number is too big, reverts to Infinity, manually set to a number type
na = n.split('');
cc = 0;
for (i=0;i<na.length;i++) {
    cc += Number(na[i]);
}
console.log(cc);