function printHeader(){
    console.log(`==========================
    Developer Report
    ===================================`);

}
const developer = {
    name: "Lokesh",
    age: 23,
    college: "NIAMT Ranchi",
    dsaSolved: 550,
    github: "Active",

    printProfile() {
        console.log(`Name: ${this.name}
            College: ${this.college}
            Dsa Solved: ${this.dsaSolved}
            GitHub: ${this.github}`)

    }
};
printHeader();
developer.printProfile();