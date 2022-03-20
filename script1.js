//Part 2 : Find the culprits and nail them — debugging javascript loops
//1.Write a code to print the numbers in the array
//Output: 1234567891011
var numsArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string1 = "";

for (var i = 0; i < 11; i++) {
    new_string1 += numsArr1[i]
}
console.log(new_string1);
//2.Write a code to print the numbers in the array
//Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
var numsArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string2 = new String(numsArr2[0]);

for (var i = 1; i < 11; i++) {
    new_string2 += "," + numsArr2[i]
}
console.log(new_string2);

//3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
//Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string3 = new String(numsArr3[10]);

for (var i = 9; i >= 0; i--) {
    new_string3 += " " + numsArr3[i]
}
console.log(new_string3);

//4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr4[i] % 2 == 0) {
        numsArr4[i] = "even"
    }
}
console.log(numsArr4);

//5.Write a code to replace the array value — If the index is even, replace it with ‘even’.
//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if ((i + 1) % 2 == 0) {
        numsArr5[i] = "even"
    }
}
console.log(numsArr5);

//6.Write a code to add all the numbers in the array
//Output: 66
var numsArr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1 = 0;
for (var i = 0; i <= 10; i++) {

    sum1 += numsArr6[i]
}
console.log(sum1);

//7.Write a code to add the even numbers only
//Output: 30
var numsArr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2 = 0;
for (var i = 0; i < 10; i++) {
    if (numsArr7[i] % 2 == 0);
    sum2 += numsArr7[i]
}
console.log(sum2);

//8.Write a code to add the even numbers and subract the odd numbers
//Output: 94

var numsArr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum3 = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr8[i] % 2 != 0) {
        sum3 += numsAr8r[i]
    } else {
        sum3 -= numsArr8[i]
    }
}
console.log(sum3);


//9.Write a code to print inner arrays
//Output:
Array(5)[1, 2, 3, 4, 5]
Array(6)[6, 7, 8, 9, 10, 11]

var numsArrr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];
for (var i = 0; i < numsArrr.length; i++) {
    console.log(numsArrr[i])
}

//10.Write a code to print elements in the inner arrays
//Output: 1234567891011

var numsArra = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];
var str_all = "";
for (var i = 0; i < numsArra.length; i++) {
    var inner_array = numsArra[i];
    for (var j = 0; j < inner_array.length; j++)
        str_all += inner_array[j]
}
console.log(str_all);