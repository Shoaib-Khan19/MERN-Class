//Addition
function addThreeNumber(num1,num2,num3) {
    return num1+num2+num3;
}
//Subtraction
function subThreeNumber(num1,num2,num3) {
    return num1-num2-num3;
}
//Multiplication
function mulThreeNumber(num1,num2,num3) {
    return num1*num2*num3;
}

// result = addThreeNumber(23,43,23);
// result = subThreeNumber(23,43,23);
// result = mulThreeNumber(23,43,23);
// console.log(result);


// Export first way
module.exports = {addThreeNumber,subThreeNumber,mulThreeNumber};
