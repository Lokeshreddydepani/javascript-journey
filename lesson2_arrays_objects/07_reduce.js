const developers = [
    { name: "Lokesh", solved: 500 },
    { name: "Rahul", solved: 320 },
    { name: "Kiran", solved: 610 },
    { name: "Anjali", solved: 280 }
];
/*const totalSolved=developers.reduce((sum,developer)=>sum+developer.solved,0);
console.log(totalSolved);
//find the developer with the highest solved count.
const best=developers.reduce((developer,max)=>{
    return developer.solved>max.solved? developer: max
 },  developers[0]
);
console.log(best.name);

/*Print all developer names.
Create an array of names using map().
Filter developers with dsa >= 500.
Find total solved using reduce().
Find the best developer using reduce().

developers.forEach(developer=>console.log(developer.name);
const arr=developers.map(developer=>developer.name);
console.log(arr);
  const newArr= developers.filter(developer=>developer.solved>=500)
                          .map(developer=>developer.name);
 console.log(newArr);
 const total=developers.reduce((sum,developer)=>sum+developer.solved,0);
 console.log(total);
 const best=developers.reduce((max,developer)=>{
    return developer.solved>max.solved? developer: max;
 },developers[0]);
 console.log(best.name);*/

 //developers.forEach(developer=>co)
 const name_kiran=developers.find(developer=>developer.name==="Kiran");
 console.log(name_kiran.solved)
 const x=developers.find(developer=>developer.solved>400);
 console.log(x);
 const name_Suresh=developers.find(developer=>developer.name==="Suresh");
 if(!name_Suresh)console.log("Developer not found");
 
