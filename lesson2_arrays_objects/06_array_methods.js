const topics = [
    { topic: "Arrays", solved: 80 },
    { topic: "Trees", solved: 70 },
    { topic: "Graphs", solved: 90 },
    { topic: "DP", solved: 40 },
    { topic: "Tries", solved: 25 }
];
//Print every topic.
topics.forEach(topic=>console.log(topic.topic));

//Create a new array containing only the topic names.
const arr= topics.map(name=>name.topic);
console.log(arr);

//topics with solved >= 50
const selected=topics.filter(name=>name.solved>=50)
                     .map(name=>name.topic);
console.log(selected);

/*const new_arr=topics.map(name=> {
    return name.topic+ '-' + name.solved});*/

const newArr= topics.map(topic=> `${topic.topic}-${topic.solved}`);
console.log(newArr);
