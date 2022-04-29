"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Coding Challenge 3

   Debug
   Author: Roger Diaz
   Date:  2021-08-11 


*/

//Declare a variable that contains the current date
var thisDay = new Date();

//Extract the day of the week of the current date and store it in wDay
var wDay = thisDay.getDay();

//Declare a variable that contains the initial value to an empty text string
var imgSrc = "";

//Generate a switch that test values of the wDay variable from 0 to 6 

switch (wDay) {
   case 0: 
      imgSrc += "<img src='sunday.png' alt=''/>";
   break;
   case 1:
      imgSrc += "<img src='monday.png' alt=''/>";
   case 2:
      imgSrc += "<img src='tuesday.png' alt=''/>";
   break;
   case 3:
      imgSrc += "<img src='wednesday.png' alt=''/>";
   break;
   case 4:
      imgSrc += "<img src='thursday.png' alt=''/>";
   break;
   case 5:
      imgSrc += "<img src='friday.png' alt=''/>";
   break;
   default:
      imgSrc += "<img src='saturday.png' alt=''/>";
   break;
}

//Inser into the div element with id banner the image corresponding to the current day
document.getElementById("banner").innerHTML = imgSrc;