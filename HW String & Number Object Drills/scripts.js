//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 
//1 Code Answer
let dogQuestion = "But what if I like dogs more than cats?";
console.log(dogQuestion.length);

//1 Result Answer "39"



//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer
let noms = "Gummy Bears";
console.log(noms.length);
//2 Result Answer "11"



//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer
let boba = "I have no interest in Boba"
let Result = boba.replace("no","full");
console.log(Result)
//3 Result Answer:I have full interest in Boba



//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer
let cookies = " Tell me whyyyy!                 ";
console.log(cookies);
console.log(cookies.trim());

//4 Result Answer



//5
// Convert 1400 into a string.
//5 Code Answer:
let x= 1400;
let y= x.toString();
console.log(y);
//5 Result Answer: 1400



//6
//Convert the boolean true and false into integers
//6 Code Answer:

//6 Result Answer:



//7
// Convert the string "02130" into an integer
//7 Code Answer:

//7 Result Answer:



//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
let cake = "Fighting Evil by Moonlight";
let result = cake.includes("Moonlight");
console.log (result);
//8 Code Answer:

//8 Result Answer:



//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:
let love = "I love";
let food = " Pizza";
let drink = " Sweet Tea";
console.log(love.concat( food," and",drink));
//9 Result Answer:



//10
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 
let dogQuestions = "But what if I like dogs more than cats?";
console.log = dogQuestions.length;
//10 Code Answer:

//10 Result Answer:


//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)
console.log(Math.min(85, -3, 5, 93.2, -42.4))
//11 Code Answer:

//11 Result Answer:


//12
//Print to the console a random number between 1 to 10.
console.log(Math.floor(Math.random()*(10-1+1))+1);
//12 Code Answer:

//12 Result Answer:


//13
//Print to the console a random number between 14 to 21.
console.log(Math.floor(Math.random()*(21-14+1))+14);

//13 Code Answer:

//13 Result Answer:



//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 
let today= new Date();
let gum= new Date();
//14 Code Answer:

//14 Result Answer: