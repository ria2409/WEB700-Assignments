/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Riya Chandreshkumar Makadia    Student ID: 131094211          Date: 02-05-2022
*
********************************************************************************/ 


var checker = require('./modules/collegeData');

console.log(checker.initialize().then(function(data){

}).catch(function(reason){
    console.log(reason);
}));