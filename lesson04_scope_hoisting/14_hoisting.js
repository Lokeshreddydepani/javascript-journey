console.log(score);
let score =90;// gives: reference Error
var score = 90;// gives: undefined bcs "The declaration is hoisted, but the assignment is not." decleartion done ,but not assignment in var

//taks2
greet();
const greet = function () { //reference error bcs greet is const here
    console.log("Welcome");
};
/*function greet() {
    console.log("Welcome");
}*/