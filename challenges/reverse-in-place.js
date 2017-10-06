'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */


function reverseInPlace(array) {
 let length = array.length;


 var spliced = array.splice(0);

 for (var i = 0; i < length; i++) {
   var curr = array[i];
   var other = spliced[length - (i + 1)];


   array.splice(i, 1, other);
 }


 return array;
}

module.exports = reverseInPlace;
