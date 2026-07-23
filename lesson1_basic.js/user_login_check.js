console.log(`============================
    User Login Credentials
    ==============================`);
const username="Lokesh";
const password="12345";
if(!username){
    console.log("Username is Required");
}else if(!password){
    console.log("Password is Required");
}
else if(password.length<6){
    console.log("Password must contain at least 6 characters");
}
    else{
    console.log("Login successful!");
}