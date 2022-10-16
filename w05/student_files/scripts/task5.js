/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

let current_date = new Date();

// Step 2: Declare another variable to hold the day of the week

const day = current_date.getDay();
console.log(day)
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

current_date = day;

// Step 4: Declare a variable to hold a message that will be displayed

let message;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'


// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if(day!== 6 && day !== 7){
    message = "Hang in there!";
}else{
    message = "Woohoo!  It is the weekend!";
}

console.log(message)
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

let anotherMessage;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch(day){
    case 1: anotherMessage="Monday"; break;
    case 2: anotherMessage="Tuesday"; break;
    case 3: anotherMessage="Wednesday"; break;
    case 4: anotherMessage="Thursday"; break;
    case 5: anotherMessage="Friday"; break;
    case 6: anotherMessage="Saturday"; break;
    case 7: anotherMessage="Sunday";

}
console.log(anotherMessage);

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.getElementById('message1').innerHTML = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.getElementById('message2').innerHTML = anotherMessage;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

let temples = new Array();

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples


function output(temples){
    
    let templename;
    let textnode;
    let location;
    let textnode1;
    let dedicated;
    let textnode2;
    let img;
    let article = document.createElement("article");
    

    for(let i=0; i<temples.length; i++){
        
        templename = document.createElement("h3");
        textnode = document.createTextNode(temples[i]['templeName']);
        templename.appendChild(textnode);
        location = document.createElement("h4");
        textnode1 = document.createTextNode(temples[i]['location']);
        location.appendChild(textnode1);
        dedicated = document.createElement("h4");
        textnode2 = document.createTextNode(temples[i]['dedicated']);
        dedicated.appendChild(textnode2);
        img = document.createElement("img");
        img.setAttribute('src',temples[i]['imageUrl']);
        article.appendChild(templename);
        article.appendChild(location);
        article.appendChild(dedicated);
        article.appendChild(img);
    }
        

    

    document.getElementById("temples").appendChild(article);

}

// Step 3: Create another function called getTemples. Make it an async function.


// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
let results = null;
async function getTemples(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      doStuff(data);
      
    }
  }

function doStuff(data) {
    temples = data;
    output(temples);
  }

getTemples(url);


// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.



// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset(){


    console.log('node '+document.getElementById("temples").childNodes.childNode);
    

}


// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples



document.getElementById("sortBy").addEventListener("click",sortBy(temples));

function sortBy(temples){
    reset();
    
    let value = document.getElementById("sortBy").value;

    console.log('value: ' + value);

    if(value === "templeNameAscending"){
            temples.sort();
    }else if(value === "templeNameDescending"){
        temples.reverse();
    }
    
    output(temples);
}




// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
