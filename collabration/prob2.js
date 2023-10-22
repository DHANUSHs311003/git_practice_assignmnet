// Problem 2 : Check whether a string is palindrome or not.
let str = "AMMA";
let bag = "";
for (let i = str.length-1; i >= 0; i--) {
    bag += str[i];
}
if(str==bag) {
  console.log("It is a palindrome");
}
else {
   console.log("It is not a palindrome");
}