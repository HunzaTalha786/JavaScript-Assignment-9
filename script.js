// STRING METHODS
// Assignment # 21-25 JAVASCRIPT


// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

document.write(`<h1>1) <i>Greet the user using his Fullname <i></h1>`);

let firstNam=prompt("Enter your first name?");
let lastNam = prompt("Enter your last name?");
let fullNam= `${firstNam} ${lastNam}` ;

document.write(`<p style="font-size:20px";><b>Hi </b>! How are you ${fullNam}.</p>`);


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

document.write(`<h1>2) Favorite mobile phone model</h1>`);


let userPhoneModel= prompt("Enter your favorite phone model");
document.write(`<p style="font-size:20px";>My favorite phone is ${userPhoneModel}.</p>`);
document.write(`<p style="font-size:20px";>Lenght of string: ${userPhoneModel.length}</p><br>`);


// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser .

document.write(`<h1>3)Index of letter </h1>`);
let word = "Pakistan";
document.write(`<p style="font-size:20px";>String :${word}`);
document.write(`<p style="font-size:20px";>Index of 'n' is :${word.indexOf('n')}`);


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser. 

document.write(`<h1>4)Last index of letter </h1>`);
let index = "Hello World";
document.write(`<p style="font-size:20px";>String :${index}`);
document.write(`<p style="font-size:20px";>Index of ' l ' is :${index.lastIndexOf('l')}`);


// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

document.write(`<h1>5)3rd Index of letter </h1>`);
let indexOf = "Pakistani";
document.write(`<p style="font-size:20px";>String :${indexOf}`);
document.write(`<p style="font-size:20px";>Character at index 3 is : ${indexOf.charAt(3)}`);

// 6. Repeat Q1 using string concat() method.

document.write(`<h1>6) <i>Greet the user using his Fullname with concat method <i></h1>`);

let firstName=prompt("Enter your first name to concat with last name?");
 let lastName = prompt("Enter your last name to concat with first name?");
 let fullName = firstName.concat(" ",lastName);

 document.write(`<p style="font-size:20px";><b>Hi </b>! How are you ${fullName}.</p>`);


// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

document.write(`<h1>7) Replace the “Hyder” to “Islam” </h1>`);
let place = "Hyderabad";
document.write(`<p style="font-size:20px";>City : ${place}.</p>`);
document.write(`<p style="font-size:20px";>After Replacement: ${place.replace('Hyder','Islam')}.`);

// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

document.write(`<h1>8) Replace all occurrences of “and” in the string with “&” </h1>`);
let message = "Ali and Sami are best friends. They play cricket and football together.";

document.write(`<p style="font-size:20px";>Message : ${message}.</p>`);
document.write(`<p style="font-size:20px";>After Replacement: ${message.replaceAll('and','&')}.`);

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

document.write(`<h1>9)Convert string into number </h1>`);
let str= "472";
document.write(`<b>Value:</b> ${str}<br>`);
document.write(`<b>Type:</b>${typeof str}<br>`);

let str1=Number (str);
document.write(`<b>Value:</b>:${str1}<br>`);
document.write(`<b>Type:</b>:${typeof str1}<br>`);


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

document.write(`<h1>10)Convert and show the input in capital letters. </h1>`);
let input = prompt("Enter your word to convert into uppercase");
document.write(`<p style="font-size:20px";>User Input: ${input}.</p>`);

let input2=input.toUpperCase();
document.write(`<p style="font-size:20px";>Upper Case: ${input2}.</p>`);


// 11.Write a program that takes user input. Convert and show the input in title case.

document.write(`<h1>11)Convert and show the input into title case. </h1>`);
let inputs = prompt("Enter your word to convert into title case");
document.write(`<p style="font-size:20px";>User Input: ${inputs}.</p>`);

let inputs1=inputs.toLowerCase().split(' ');
for(let i=0 ; i< inputs1.length; i++){
    inputs1[i]=inputs1[i].charAt(0).toUpperCase()+inputs1[i].slice(1);
}
document.write(`<p style="font-size:20px";>Title Case: ${inputs1.join(' ')}.</p>`);


// 12. Write a program that converts the variable num to string. 
// Remove the dot to display “3536” display in your browser.

document.write(`<h1>12)Convert the variable number to string. </h1>`);
let num = 35.36;
document.write(`<p style="font-size:20px";>Number: ${num}.</p>`);

let strNum=num.toString().replace('.',"");
document.write(`<p style="font-size:20px";>Result: ${strNum}.</p>`);


// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 
// Note: 
// ASCII code of ! is 33 
// ASCII code of , is 44 
// ASCII code of . is 46 
// ASCII code of @ is 64

document.write(`<h1>13) Valid and invalid Username</h1>`);

let userName =prompt("Enter your valid name below.");

if (userName.includes('@') || userName.includes('.') || userName.includes('!') || userName.includes(',')) {

    alert("Invalid username. Please enter the valid username");

}
else{
    document.write(`<b>Valid Username:</b> ${userName}`);
}

// 14. You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not. 
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. 

let items =["cake", "apple pie", "cookie", "chips", "patties"];
let userchoice =prompt("Welcome to ABC Bakery! What do you want sir/ma'am?");

document.write(`<h1>14) Bakery items availability mesaage</h1>`)

userchoice = userchoice.toLowerCase();
let list = items.map(item => item.toLowerCase()).indexOf(userchoice);
if(list!==-1){
    document.write(`<p style="font-size:20px";"><b>Answer : </b>${userchoice} is <b>available</b> at index ${list} in our bakery.</p> `);
}
else{
    document.write(`<p style="font-size:20px";">We are sorry! ${userchoice} is <b>not available</b> in our bakery.</p>`);

}

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, 
// prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII 
// table at the end of this document.

document.write(`<h1>15)Validation of Password</h1>`);

let password =prompt("Enter your password");
document.write(`Enter Password : <b>${password}</b><br>`);

if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    document.write(`Message : <b>Enter valid password it must have 6 digits.</b><br>`);

} else if (!isNaN(password.charAt(0))) {
    alert("Password must not start with a number.");
    document.write(`Message :<b> Password can not begin with number. Please enter valid password.</b><br>`)
} else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    alert("Password must contain both alphabets and numbers.");
    document.write(`Message :<b> Password must contain alphabets and number. Please enter valid password.</b><br>`)
} 
else{
    document.write(`<p style="font-size:20px";">Message :<b>Valid password.</p></b>`);
}


// 16. Write a program to convert the following string to an 
// array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser.

document.write(`<h1>16)String Split Method</h1>`);

let university = "University of Karachi"; 
let universityArray = university.split(" ");

document.write("<h2>Elements of the array:</h2>");
        universityArray.forEach(function(element) {
            document.write(element + "<br>");
        });


// 17. Write a program to display the last character of a user input.

document.write(`<h1>17)Display the last character of a user input</h1>`);

let character =prompt("Enter the word to get it's last character");
document.write(`User Input:${character}<br>`);

let lastCharacter = character.slice(-1);
document.write(`<p style="font-size:20px";">Last character of input:  ${lastCharacter}<br></p>`);


// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

document.write(`<h1>18)Count number of occurrences of word </h1>`)

let text = "the quick brown fox jumps over the lazy dog";
document.write(`Text: <b>${text}</b><br>`);

let text2=text.split("the").length - 1;
document.write(`<p style="font-size:20px";">Comment:<b> There are ${text2} occurance of "the".</b><br></p>`);
