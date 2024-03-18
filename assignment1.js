// Ques1. Suppose you are building a payment checkout page and must display the final price after the discount+
// Create a simple discount calculator that takes two values from the variables - the total cost and the
// discount percentage - and prints the discounted value.
let totalValue = 2000;
let discountPercentage = 20
result = totalValue - (totalValue*discountPercentage/100)
console.log("The final price after discount is:" + result);

// Ques2. You are building a simple login system. Implement the login feature that has two variables: username and
// password. You should check if the username is "admin" and the password is "12345"+ If both conditions are
// true, print "Login successful" otherwise, print "Invalid credentials".
let username = "admin";
let password = "12345";
if (username=="admin" && password=="12345") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

// Ques3. You are working on a currency conversion application. Write a program that has a variable which stores the
// amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current
// exchange rate of 1 USD = 82 INR.
let INR = 850
let USD = 82
output = INR / USD
console.log(INR + " INR is " + output + " USD");

// Ques4. You are developing a booking application for a cinema. The ticket price depends on the type of the
// viewer("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total
// price to be paid. Let’s assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price
// for a senior is Rs. 120.
let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;
total_price = numberOfChilds*100 + numberOfAdults*150 + numberOfSeniors*120
console.log("The total ticket price is " + total_price);

// Ques5. You are building a shipping application. Write a program that takes the type of package ("standard",
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
// based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight"
// would be delivered the next day.
let packageType = "standard"

switch (packageType) {
    case "express":
        console.log("1-2 days");
        break;
    case "overnight":
        console.log("next day");
        break;
    default:
        console.log("3-5 days");
        break;
}

// Ques6. You are developing a form validation system. Write a program that takes user information(such as name,
//     email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages
//     like "Name should be a string," "Email should be a string," or "Age should be a number." if any field is not
//     proper.
let name = "Mithun";
let email = "mithun.s@pw.live";
let age = 21;

if ((typeof name ) !="string") {    
    console.log("Name should be a string.");
}
if ((typeof email) !="string") {
    console.log("Email should be a string.");  
} 
if ((typeof age) !="number") {
    console.log("Age should be a number.");  
}

// Ques7. You are building a simple shopping list app. You have the items name in an array. Write a program that uses
// a for loop to print all the items in the shopping list array.
let array = ["book", "pen", "pencil", "eraser", "pen"]
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}

// Ques8. You are creating a countdown app. Implement a program that uses a while loop to count down from 10 to 1
// and prints each number.
let count = 10
for (let count = 0; count <=10; count++) {
    console.log(count);
}

// Ques9. You are given an array of numbers and strings. Your task is to find the first string in the array. On finding the
// first string print “Found the First String” and its value
const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];
for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index]==="string") {
        console.log("Found The First String: " + arr[index]);
        break
    }   
}

// Ques10. You are given with an array of numbers both positive and negative. Your task is to print only the positive
// numbers.
let num = [1, 2, -3, 5, -9, -8, -7, 7]
for (let index = 0; index < num.length; index++) {
    if (num[index] > 0) {
        console.log(num[index]);
        continue
    }   
}
