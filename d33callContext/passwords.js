"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */

function askPassword(ok, fail, password) {
    if (password == "rockstar") {
        return ok();
    }
    else {
        return fail()
    };
}

let user = {
    name: 'John',

    loginOk() {
        return (`${this.name} logged in`);
    },

    loginFail() {
        return (`${this.name} failed to log in`);
    },



};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar")


function askPassword2(ok, fail, password) {
    if (password == "rockstar") {
        return ok();
    }
    else {
        return fail();
    } 
}

let user2 = {
    name: 'John',

    login(result) {
        return (this.name + (result ? ' logged in' : ' failed to log in'));
    }
};
let loginOk = user2.login.bind(user2, true);
let loginFail = user2.login.bind(user2, false);
askPassword2(loginOk, loginFail, "rockstar");

//function property after bind => the answer is undefined because the object bound doesn't have property test.
//second bind => the answer is no, you can't chain binds. the object created after bind only remembers the context and arguments at creation time. the output will be John
//Bound function as method => it will print out null.

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach(function(student) {
    // Error: Cannot read property 'title' of undefined
    console.log(this.title + ': ' + student)
    });
    }
   };

//fixing the error using arrow functions.
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach(student => console.log(this.title + ': ' + student));
    }
   };
   group1.showList();


//fixing the error using bind
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        function grouping(student){
            console.log(this.title + ': ' + student)
        }
    this.students.forEach((student) =>{
        grouping.bind(group2,student)()
    }
        );
    }
   };
   group2.showList();

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests
