let niceLongString = `Once upon a time in a galaxy far far away`
console.log(niceLongString.search('far')); /* Search takes regex or string pattern,
searches for it, returns index position of first instance of pattern by default */
console.log(niceLongString.lastIndexOf('far')); //same, but last index position
console.log(niceLongString.slice(22,28)); //slice of string from index:index
console.log(niceLongString.substring(22,32)); //slice of string from start:end
console.log(niceLongString.substr(29,7)); //slice of string from start,length
console.log(niceLongString.replace('galaxy', 'teapot')); //replace string w/ string
console.log(niceLongString.concat(' <dramatic music>')); //concatenate string
console.log(niceLongString.charAt(3)); //character at index
