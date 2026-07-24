const developers = [
    { name: "Lokesh", solved: 500 },
    { name: "Rahul", solved: 320 },
    { name: "Kiran", solved: 610 }
];
const copy= [
    ...developers,
    { name: "Anjali",
        solved : 280}
];
console.log(copy);

const developer = {
    name: "Lokesh",
    solved: 500
};
const newCopy= {
    ...developer,
    solved:600,
    college: "NIAMT"
};
console.log(newCopy.solved);