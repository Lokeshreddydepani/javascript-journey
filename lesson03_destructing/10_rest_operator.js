//taks1:return product of arr

function multiply(...nums){
    return nums.reduce((product,num)=>product*num,1);
}
console.log(multiply(10,20,30));
//taks2: first,...
const skills = ["C++", "Git", "JavaScript", "React"];
const [first,...remain]=skills;
console.log(first);
console.log(remain);

//task3
const developer = {
    name: "Lokesh",
    solved: 550,
    college: "NIAMT",
    github: "Active"
};

const {name,...details}=developer;
console.log(name);
console.log(details);