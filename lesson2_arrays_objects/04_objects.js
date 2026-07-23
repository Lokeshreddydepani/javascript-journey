function printHeader(){
    console.log(`==========================
    Developer Report
    ===================================`);

}
const developer ={
     profile (){
        name: "Lokesh",
    age: 23,
    college: "NIAMT Ranchi"
     },
    dsaSolve: 500,
    github: "Active",
    skills :  ["C++", "Git", "GitHub", "JavaScript"]

};
printHeader();
//task1
console.log(`Name : ${developer.profile.name}
    COllege : ${developer.profile.college}
    GitHub Statua: ${developer.github}`);

//task2: update
developer.dsaSolve=550;
console.log('DSA count:', developer.dsaSolve);

//task3: add leetcode rank
developer.leetcodeRank=12500;
console.log(`leetcodeRank : ${developer.leetcodeRank}`);

//task4: print skills
console.log(`Skills :`)
for(let skill of developer.skills) {
    console.log(skill);
}
//task5: print profile
console.log("Profile:", developer.profile);