/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2){
    return number1 + number2;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum


function addNumbers(){
    addend1 = Number(document.getElementById('addend1').value);
    addend2 = Number(document.getElementById('addend2').value);
    document.getElementById('sum').value = add(addend1, addend2);
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const buttonElement = document.getElementById("addNumbers");

buttonElement.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    minuend = Number(document.getElementById('minuend').value);
    subtrahend = Number(document.getElementById('subtrahend').value);
    document.getElementById('difference').value = subtract(minuend, subtrahend);
}

const buttonElementSub = document.getElementById("subtractNumbers");

buttonElementSub.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

function multiply(number1, number2){
    
    return number1*number2;
}

function multiplytNumbers(){
    factor1 = Number(document.getElementById('factor1').value);
    factor2 = Number(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
}

const buttonElementMult = document.getElementById("multiplyNumbers");

buttonElementMult.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

function divide(number1, number2){
    console.log(number1/number2);
    return number1/number2;
}

function divideNumbers(){
    dividend = Number(document.getElementById('dividend').value);
    divisor = Number(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(dividend, divisor);
}

const buttonElementDiv = document.getElementById("divideNumbers");

buttonElementDiv.addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.







/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

let date = new Date();

// Step 2: Declare a variable to hold the current year

let year = date.getFullYear();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

const numbers = new Array();
i = 0;
while (i < 25) {
    numbers[i] = i+1;
    i++;
  }

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const numbers2 = numbers.map(Odds);

document.getElementById("odds").innerHTML = numbers2;

function Odds(value, index, array) {
    let value2 = 0;
    if(index%2 !== 0){
        value2 = value;
    }
    return value2 ;
}
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const numbers3 = numbers.map(Evens);

document.getElementById("evens").innerHTML = numbers3;

function Evens(value, index, array) {
    let value2 = 0;
    if(index%2 === 0){
        value2 = value;
    }
    return value2 ;
}
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"



document.getElementById("sumOfArray").innerHTML = sumOfArray(numbers);

function sumOfArray(array) {
    let sum = 0;
    let i = 0;
    while(i < array.length){
        sum = sum + array[i];
        i+=1;
    }
    return sum;
}

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const numbers4 = numbers.map(Multiplied);

document.getElementById("multiplied").innerHTML = numbers4;

function Multiplied(value, index, array) {
   
    return value*2 ;
}
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById("sumOfMultiplied").innerHTML = sumOfArray(numbers) *2;

