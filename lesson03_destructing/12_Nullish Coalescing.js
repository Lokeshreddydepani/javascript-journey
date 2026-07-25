//  ?? only checks for:null,undefined
// ||Checks for all falsy values
const score = 0;
/*Print:0
using ||
using ??*/
console.log(score || 100);
console.log(score??100);

const user = {
    name: "Lokesh"
};
console.log(user.github?.username ?? "GitHub Not Linked");

//Print:Light
//using ??.
const settings = {
    theme: null
};
console.log(settings.theme??"light");//bcs theme is given as null (undefined val)