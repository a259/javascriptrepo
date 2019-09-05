space1 = 'x', space2 = 'o', space3 = ' '
space4 = 'x', space5 = 'x', space6 = ' '
space7 = 'o', space8 = ' ', space9 = ' '
console.log('     |     |     ');
console.log(`  ${space1}  |  ${space2}  |  ${space3}  `);
console.log('     |     |     ');
console.log('-----|-----|-----');
console.log('     |     |     ');
console.log(`  ${space4}  |  ${space5}  |  ${space6}  `);
console.log('     |     |     ');
console.log('-----|-----|-----');
console.log('     |     |     ');
console.log(`  ${space7}  |  ${space8}  |  ${space9}  `);
console.log('     |     |     ');

if (space1 == space2 && space2 == space3 && [space1, space2, space3].includes(' ') == false) {
   console.log("Player wins!")
} else {
   ''//console.log('You have failed')
}
if (space4 == space5 && space5 == space6 && [space4, space5, space6].includes(' ') == false) {
   console.log("Player wins!")
} else {
   ''//console.log('You have failed')
}
if (space7 == space8 && space8 == space9 && [space7, space8, space9].includes(' ') == false) {
   console.log("Player wins!")
} else {
   ''//console.log('You have failed')
}
if (space1 == space4 && space4 == space7 && [space1, space4, space7].includes(' ') == false) {
   console.log("Player wins!")
} else {
   ''//console.log('You have failed')
}
if (space2 == space5 && space5 == space8 && [space2, space5, space8].includes(' ') == false) {
   console.log("Player wins!")
} else {
   ''//console.log('You have failed')
}
if (space3 == space6 && space6 == space9 && [space3, space6, space9].includes(' ') == false) {
   console.log("Player wins!")
} else {
   ''//console.log('You have failed')
}
if (space1 == space5 && space5 == space9 && [space1, space5, space9].includes(' ') == false) {
   console.log("Player wins!")
} else {
   ''//console.log('You have failed')
}
if (space3 == space5 && space5 == space7 && [space3, space5, space7].includes(' ') == false) {
   console.log("Player wins!")
} else {
   ''//console.log('You have failed')
}
