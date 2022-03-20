//1.Fix the below to alert Guvi geek
let admin = 9,
    fname = 10.5;
fname = "Guvi";
lname = "geek"
admin = fname + " " + lname;
alert(admin); // "Guvi geek"

//2.Fix the below to alert hell0 Guvi geek
let fnamee = 10.5;
fnamee = "Guvi";
lname = "geek"
let name = fnamee + lname;
alert(`hello ${name}`);

//3.Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);

//4.Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
//bacuse at first it compares string 2 with 1
var a3 = 2 > 12;
//Don't touch below this
if (a3) {
    console.log("Code is Blasted")
} else {
    console.log("Diffused")
}


//5.How to get the success in console.
let b4 = (prompt("Enter a number?"));
a4 = parseInt(b)
    //Don't modify any code below this
if (a4) {
    console.log('OMG it works for any number inc 0');
} else {
    console.log("Success");
}

//6.How to get the correct score in console.
let value = parseInt(prompt('How many runs you scored in this ball'));
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
}
//7.Fix the code to welcome the boss
let message;
if (null || 2 || undefined) {
    message = "welcome boss";
} else {
    message = "Go away";
}
console.log(message);

//8.Fix the code to welcome the boss
let message2;
let lock = null;
//Dont change any code below this 
if (null || lock || undefined) {
    message2 = "Go away";
} else {
    message2 = "welcome";
}
console.log(message2);

//9.Fix the code to welcome the boss
let message1;
let lock1 = null;
//Dont change any code below this
if (lock && " " || undefined) {
    message = "Go away";
} else {
    message = "welcome";
}
console.log(message);
//10.Whats the msg printed and why? Guess you answer before running it.
var lemein = '0';
var lemeout = 0;
var msg = '';
if (lemein) {
    msg += 'hi';
}
if (lemeout) {
    msg += 'Hello';
}
console.log(msg); //hi

//because string 0("0") is cnsidered true