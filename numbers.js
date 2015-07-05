'use strict';

var undefined  = undefined;
console.log(undefined);

var num1  = 0;
var num2  = 1.;
var num3  = 0.2;
var num4  = 0e1;
var num5  = 0E1;
var num7  = 0e+1;
var num8  = 0e-23124;
var num9  = 0.e2;
var num10 = 1.123E+123;
var num11 = 1.79769313486231570e+308;
var min = 2;
var max = 5;

console.log(9223372036854775807 + 150);
console.log(1e-5);
console.log(num11 + 100000);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
console.log(Math.LN10);

console.log(Math.min('asdf', -1, 0));
console.log(Math.floor(Math.random() * (max - min) + min));

console.log(Math.exp(Math.log(2)));

console.log(Math.ceil(20.000000000001));
console.log(Math.round(20.49));
console.log(Math.round(20.499999999999999));