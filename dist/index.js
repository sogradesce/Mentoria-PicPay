"use strict";
function printUser(usr) {
    console.log(usr.name);
    console.log(usr.age);
    console.log(usr.password);
}
let usr1 = {
    name: "Francisco",
    age: 24,
    password: "123321"
};
printUser(usr1);
