"use strict"
function solveEquation(a, b, c) {
  let discriminant = (Math.pow(b, 2)-4*a*c);
  let arr = [];

  if (discriminant < 0) {
    console.log('У уравнения нет корней' + arr);

  } else if (discriminant === 0) {
    let x = -b/(2*a);
    arr.push(x);
    console.log('У уравнения один корень' + arr);

  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    arr.push(x1);
    arr.push(x2);
    console.log('Уравнение имеет два корня' + arr);
  }
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentInMonths = percent / 100 / 12;
  let bodyOfCredit = amount - contribution;
  let mountlyAmount = bodyOfCredit * (percentInMonths + (percentInMonths / (((1 + percentInMonths)**countMonths) - 1)));
  let totalSum = mountlyAmount * countMonths;
  let a = + ((totalSum).toFixed(2));
  return a;
}
