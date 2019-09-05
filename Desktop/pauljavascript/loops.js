//for loops
for (i=0;i<10;i++) {
    console.log(i)
}
//If we can create a loop to put 0-9 on the screen, how can we count from 9-0.
console.log('9,8,7,6,5,4,3,2,1,0 lol') 
//ok
for (i=9;i>-1;i--) {
    console.log(i)
}
//alt
ar = [0,1,2,3,4,5,6,7,8,9]
for (i = 9; i >= 0; i--) {
    console.log(ar[i])
}
greasySpoon = ['spam', 'egg', 'sausage', 'tomato', 'spam', 'spam','baked beans','spam'];
console.log(greasySpoon[0]);
console.log(greasySpoon[1]);
console.log(greasySpoon[2]);
for (i=0;i<greasySpoon.length;i++) {
    console.log(greasySpoon[i])
}

films = ['Die Hard', 'Die Hard 2', 'Die Hard With A Vengeance', 'Live Free Or Die Hard', 'A Good Day To Die Hard'];
films.splice(2,0,'Die Hardest', 'Die Harder Than You Ever Died Before');
for (i=0;i<films.length;i++) {
    console.log(films[i])
}

//while loops
let cards = ['Spade', 'Heart', 'Diamond', 'Club'];
let currentCard = 'Spade';
while (currentCard != 'Diamond') {
    currentCard = cards[Math.floor(Math.random()*4)];
    console.log(currentCard)
}

const bust = (x) => {
    if (x == 'Ghostbusters') {
        return `Bustin' makes me feel good!`
    } else {
        return 'Booo, we want Ghostbusters!'
    }
}
//continuing your film for loop
films = ['Die Hard', 'Die Hard 2', 'Die Hard With A Vengeance', 'Live Free Or Die Hard', 'A Good Day To Die Hard'];
films.splice(2, 0, 'Ghostbusters', 'Die Hardest', 'Die Harder Than You Ever Died Before');
for (i=0; i < films.length; i++) {
    if (i == 2) {
        console.log(bust(films[i]))
    } }

//make some rng and loop it until it hits 50
let ii = 0
while (ii != 50) {
    ii = Math.floor(Math.random()*100);
    console.log('End.')
}