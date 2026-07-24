const developers = [
    { name: "Lokesh", solved: 500, college: "NIAMT" },
    { name: "Rahul", solved: 320, college: "IIT" },
    { name: "Kiran", solved: 610, college: "NIT" }
];
const [first]=developers;
console.log(first.name);
console.log(first.solved);
//first 2 developer names
const [frist,second]=developers;
console.log(frist.name,second.name);

for(const developer of developers){
    const{ name,solved} =developer;
    console.log(`${name}->${solved}`);
}