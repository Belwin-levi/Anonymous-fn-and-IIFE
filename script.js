//anonymous and IIFE ssignments
// 1..odd numbers in an array

var oddnum=function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        console.log(arr[i]);
    }
}
oddnum([10,20,15,17,19]);

//
(function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        console.log(arr[i]);
    }
}
)([10,20,15,17,19]);

///2. CONVERT ALL THE STRINGS TO TITLE CAP IN A STRING ARRAY

const UC=function(x){
    

    const y = x.map(name => name.toUpperCase());
    
    console.log(y);
    }
    UC(['aki', 'bel']);

    //

    (function(x){
    

        const y = x.map(name => name.toUpperCase());
        
        console.log(y);
        })(['aki', 'bel']);


////3. SUM OF ALL NUMBERS IN AN ARRAY

var TOTAL=function(arr)
{
     var SUM=0;
    for(var i=0;i<arr.length;i++)
    {
       SUM = SUM + parseInt(arr[i]);
    
    }
      console.log(SUM);
}
TOTAL([10,20,15,17,19]);


///
(function(arr)
{
     var SUM=0;
    for(var i=0;i<arr.length;i++)
    {
       SUM = SUM + parseInt(arr[i]);
    
    }
      console.log(SUM);
})([10,20,15,17,19]);


/// 4.RETURN ALL THE PRIME NUMBERS IN AN ARRAY

var x =function(numArray)
{

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
}
x([2, 3, 4, 5, 6, 7, 8, 9, 10]);


///

(function(numArray)
{

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
}
)([2, 3, 4, 5, 6, 7, 8, 9, 10]);


///5. RETURN ALL THE PALINDROMES IN AN ARRAY

function checkPalindrome(str) {

    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string='taat';
checkPalindrome(string);


///

(function(str){

    const arrayValues = str.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(str == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
)('taat');


////6. Return median of two sorted arrays of same size

var arr1=[1,8,7,9];
var arr2=[2,6,5,4];
var arr=arr1.concat(arr2);

const len = arr.length;
const arrSort = arr.sort();

const mid = Math.ceil(len / 2);

const median =
  len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];

console.log("median: ", median);


////7. REMOVE DUPLICATES FROM AN ARRAY


var toUniqueArray=function(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  console.log(newArr);
}
toUniqueArray(["red","red","green","green","green"]);


///

(function(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  console.log(newArr);
})(["red","red","green","green","green"]);


///8. ROTATE THE ARRAY BY K TIMES AND  RETURN THE ROTATED ARRAY

var arr=[1,2,3,4,5];
var rotate=function(arr, k)
{
    for(let i=1;i<=k;i++)
    {
        arr.push(arr.shift());
        
    }return arr;
    

}
var result=rotate(arr,4);
console.log(result);


///