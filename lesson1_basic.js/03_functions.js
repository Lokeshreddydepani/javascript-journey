function printHeader(){
    console.log(`==========================
    Student Report
    ===================================`);

}
function printStudent(name,age,dsaSolved) {
console.log(`       Name : ${name}
        Age : ${age}
        DSA Solved : ${dsaSolved}`);

}
function printResult(num) {
    if(num>=300) {
        console.log("PASS");
    }else {
        console.log("FAIL");
    }
}
printHeader();

printStudent("Lokesh", 23, 500);

printResult(500);