/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/

function analyzer() {
	let props = {
		numProperties: 0,
		cntShortName: 0,
		cntReference: 0
	};

	let ownProps = Object.getOwnPropertyNames(this);//array of string 
	props.numProperties = ownProps.length;

	for (const p of ownProps) {
		if (typeof this[p] == 'object') {
			props.cntReference += 1;
		}
		
		if (p.length < 3) {
			props.cntShortName += 1;
		}
	}

	return props;
}

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name=name;
	this.country=country;
	this.grades=grades;
	this.computeGrade = function(){
		let avg=0;
		let sum=0;
		for(let grade of this.grades ){
			sum+=grade;
		
		avg=sum/this.grades.length
		}
	 return avg;
}
}



	


	
