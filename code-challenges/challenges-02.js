"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  optional:
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
// Input: ['C#', 'JS', 'Ruby','Python']
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
  let arrReverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReverse.push(arr[i]);
  }
  return arrReverse;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Given the array consisting of 2n elements. Write a function that takes the
// array in the form [x1,x2,...,xn,y1,y2,...,yn] and return the array
// in in the form [x1,y1,x2,y2,...,xn,yn].
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffleArray = (arr) => {
  // Find the value of n
  let n;
  if (arr.length % 2 === 0) {
    n = arr.length / 2;
  } else if (arr.length % 2 === 1) {
    n = (arr.length + 1) / 2;
  }

  //  Creating two arrays, one for the first half of the array and one for the
  //  second half.
  let arr1 = [];
  let arr2 = [];

  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === n) x++;

    if (x === 0) {
      arr1.push(arr[i]);
    }
    if (x === 1) {
      arr2.push(arr[i]);
    }
  }

  //  Creating a new array and pushing the values of arr1 and arr2 into it.
  let arrResult = [];
  for (let j = 0; j < n; j++) {
    if (arr1[j]) arrResult.push(arr1[j]);
    if (arr2[j]) arrResult.push(arr2[j]);
  }
  return arrResult;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const shuffleString = (str, indicesArr) => {
  let arrString = str.split("");
  let arrResult = [];

  for (let i = 0; i < str.length; i++) {
    arrResult[indicesArr[i]] = arrString[i];
  }
  return arrResult.join("");

  // I'm sure that my solution is correct
};
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, shuffleArray, shuffleString };
