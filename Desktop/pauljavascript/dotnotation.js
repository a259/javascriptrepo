/* This is a multi-line comment!
   See, its really multi-line... */
//this is a single-line comment
console.log('Hello, World'); //Ctrl+Shift+F5 to run
console.log('Stuff'.length); //property
console.log('Stuff'.toUpperCase()); //method
console.log(Math.random()); //library
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

//display the 8th character from this string to console
console.log('All Around The World'[7].toUpperCase());
console.log('All Around The World'.slice(7,8).toUpperCase());
console.log('All Around The World'.substring(7,8).toUpperCase());//start,end
console.log('All Around The World'.substr(7,1).toUpperCase());//start,length
console.log('All Around The World'.toUpperCase().charAt(7));