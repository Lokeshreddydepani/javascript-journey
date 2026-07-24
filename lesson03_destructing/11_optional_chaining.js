/*Without optional chaining
developer.github.username

If github doesn't exist:

💥 Runtime Error*/
const developer = {
    name: "Lokesh",
    github: {
        username: "lokeshreddy"
    }
};
//Safely print:lokeshreddy using optional chaining.
console.log(developer.github?.username);

const develop = {
    name: "Rahul"
};
console.log(develop.github?.username);

//Safely print the salary using optional chaining.
const company = {
    employee: {
        details: {
            salary: 50000
        }
    }
};
console.log(company.employee?.details?.salary);