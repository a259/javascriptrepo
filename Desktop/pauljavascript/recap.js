//Recap slides, notes taken and snippets revisited, plus tips and tricks

'function+arrows: up/down:pageup/pagedown, left/right:startofline/endofline';

'Symbol : This data type is used as the key for an object property when the property';
'is intended to be private, for the internal use of a class or an object type';

'Besides pre-ES6 function declaration, and the arrow notation drilled to death';
const squarer = function (n) {
    return n*n
} //as opposed to
function squarerer (n2) {
    return n2*n2
}
// the first being an anonymous function because the declaration lacks a name
// but the function is named when its assigned to the variable squarer, same end

//shell recap
'$pwd';//present working directory
'$cd~';//tilde is home
'$clear';//wipe screen clear
'$exit';//terminates the terminal windows connection to the shell

//git & github recap

//FIRST COMMIT
'make an account on github, make a new repo for your project...';//then
'navigate to the folder you want to link to the repo';
'$git init'; //DOES THIS NEED TO BE DONE ANYWHERE SPECIFIC?
//I NAVIGATED TO THE FOLDER I WANTED TO LINK AFTER THIS STEP, WORKED FINE
'$git status'; //have a read of some stuff
'$git add .'; //add everything in this folder to the repo, serves as an update too
'$git commit -m "i.e. my first commit comment"'; //commit with comments
'$git status';//have another read of some stuff, or not, no matter
'$git remote add origin https://github.com/username/respositoryname.git';//LINK TO
//I GOT THIS URL FROM THE REPO ONLINE DIRECTLY COPIED AND PASTED IT
'$git push -u origin master'; //push your folder over there
//it will ask you for your LOGIN first, THEN password

//AFTER FIRST COMMIT
'$git status';//remember to inspect the process at every stage til you know whats up
'$git add .';//serves as an update also
'$git commit -m "your commit comment"';//as above
'$git push origin master';//no -u this time? i did -u second time, no issues, works

//'DOWNLOADING' A REMOTE REPO TO YOUR MACHINE
//Create a directory with the same name as your (target?) repository, then:
'$cd path/folder';
'$git init';
'$git pull https://github.com/username/"respositoryname.git"';
//Everything should now be in the folder pull from git.


//Recap complete. Consider putting any extra tips and tricks you find and wish
//to collate from notebooks etc, in here.

//check moodle for more:
//Git
//1 - Commands lines and gitFile
//2 - Git and GitHubFile
//Git cheat sheet

