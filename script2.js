//Part3

//1.Fix the code to get the largest of three.
aa = (f, s, t) => {
    //let f,s,t;
    console.log(f, s, t);
    if (f > s && f > t) {
        console.log(f)
    } else if (s > f && s > t) {
        console.log(s)
    } else {
        console.log(t)
    }
}
aa(1, 2, 3);

//2.Fix the code to Sum of the digits present in the number
let n = "123";
console.log(add(n));

function add(n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += parseInt(n[i])

    }
    return sum;
}

//3.Fix the code to Sum of all numbers using IIFE function
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function() {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
})();

//4.print all odd numbers in an array using IIFE function
var arr9 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            console.log(arr[i]);
        }
    }
})();
//5.Fix the code to reverse.
(function(str) {
    str8 = str.split("").reverse().join("");
    console.log(str8);
})("abcd")
//6.Fix the code to remove duplicates.
var res = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        newArr = [];
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
}


res(["guvi", "geek", "guvi", "duplicate", "geeK"])