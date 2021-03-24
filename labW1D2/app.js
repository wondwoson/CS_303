/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
     if(obj===undefined){
         return "no object passed"
     }else if(obj===null){
         return "null argument";
     }
     else {
         if(Object.keys(obj).length===0){
        return "object has no properties"
     }
     else {
       return Object.keys(obj).sort().join(".");
     }
 }
}


