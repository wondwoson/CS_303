/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
    if(string===undefined){
        return "missing argument"
    }

    if(typeof string != "string"){
        return "argument not string";
    }

    if(string===""){
        return "";
    }

    let strArr=string.split("");
    string="";
    for(let i=1; i<strArr.length; i+=2){
        string+=strArr[i];
    }

    return string;
}



// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
   /* return array.reduce((sum, n)=> {
        sum = (sum > 0) ? sum : 0;
        n = (n > 0) ? n : 0;
        return n + sum;
    });
    */

    let filtered = array.filter(n => n > 0);
    if (filtered.length < 1) {
        return 0;
    }

    return filtered.reduce((acc, n) => acc + n);

}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
    return {
        numbers: array.filter(x => typeof x == 'number'),
        strings: array.filter(x => typeof x == 'string')
    };
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
    return array.map(x => (typeof x === 'number') ? Math.abs(x) : x);
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
    let filtered = [];
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            if (!flag) {
                array[i] = '*';
                flag = true;
            } else {
                continue;
            }
        } else {
            flag = false;
        }
        filtered.push(array[i]);
    }
    return filtered; 
    //'12*5'
}
console.log(removeZeros([1,2,0, 0, 0,5,0,4,0,0,9,7]))


