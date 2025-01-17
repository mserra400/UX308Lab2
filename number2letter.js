// 2) Take a variable with a **numeric** grade and *output* the corresponding **letter** grade

let numeric = 52;
let letter = "F";
if (numeric >= 90){
    letter="A+";
} else if (numeric >= 80){
    letter= "A"
}
else if (numeric >= 70){
    letter= "B"
}
else if (numeric >= 60){
    letter= "C"
}
else if (numeric >= 50){
    letter= "D"
}
console.log(`${numeric} numeric is ${letter} letter`);