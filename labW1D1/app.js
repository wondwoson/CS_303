/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function pow(x, n) {
	return x ** n;
}

function add2(n1, n2) {
	return n1 + n2;
}

function add(...args) {
	console.log(args)
	let count = args.length;
	let sum = 0;
	for (let i=0; i<count; i++) {
		sum += args[i];		
	}
	
	return sum;
}

/*
	Input: grades is an array of integers = [n, n, ...]
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {
	let sum=0;
	for(let i=0;i<grades.length;i++){
		sum+=grades[i];
	}
	let average = sum/grades.length;
   
	let letter="";
	if(average>=90){
		letter="A";
	}else if(average>=80){
		letter= "B";
	}else if (average>=70){
		letter="C";
	}else if(average>=60){
		letter="D";
	}else{
		letter="NC";
	}
		
	return letter;
}
//console.log(computeGrade([80,50,80]));

