// var tempConvert = function(celsius1) {
// 	return celsius1 * 1.8 + 32;
// }
//
// var celsius1 = parseFloat(prompt("Enter Celsius Temperature"));
// var results = tempConvert(celsius1);
// // alert(results);

var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var result = subtract(number1, number2);
alert(result);

var multiply = function(number1, number2) {
  return number1 * number2;
}

var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var result = multiply(number1, number2);
alert(result);

var divide = function(number1, number2) {
  return number1 / number2;
}

var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var result = divide(number1, number2);
alert(result);
