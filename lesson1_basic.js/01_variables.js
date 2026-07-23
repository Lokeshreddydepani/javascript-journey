console.log(`==========================
    Developer Card
=============================`);
const name= "Lokesh";
const age =23;
const college= "NIAMT_RANCHI";
const dsaSolved=500;

console.log(`Name : ${name}
    Age: ${age}
    College: ${college}
    DSA Solved: ${dsaSolved}`);

const githubStatus = "Active";
console.log(`githubStatus : ${githubStatus}`);
const skills = ["C++", "Git", "GitHub", "JavaScript"];

console.log(`⛳{Skill}`);
for (const skill of skills) {
    console.log(skill);
}

if(dsaSolved >=500) {
    console.log("Eligible : YES");
} else{
    console.log("Eligible : NO");
}