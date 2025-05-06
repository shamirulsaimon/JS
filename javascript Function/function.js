

let num1 = 10;
let num2 = 20;

let result = num1 + num2;


console.log(result);


function result(a, b) {
	return a + b;
}

let result1 = result(30, 40);
let result2 = result(40, 50);
let result4 = result(50, 50);

console.log(result1, result2, result4); // Output: 70 90 100


function add(num1 = 0, num2 = 0)
{
	// if (num1 == undefined)
	// {
	// 	num1 = 0;
	// }

	// if (!num2) // num2 == undefined
	// {
	// 	num2 = 0;
	// }

	return num1 + num2;
}


let result = add();

console.log(result);



function add(num1, num2, num3) {
	
	console.log(arguments);

}

let result = add(20, 10, 30, 50, 60);



function add(num1, num2) {
	return num1 + num2;
}

let result = add(add(5, 5), add(20, 20)); // unnecessary but we can do that?

console.log(result);



function sayHello()
{
	console.log('Hello World');
}

function anothersayHello()
{
	sayHello();
}

function OnceAgainSayHello()
{
	anothersayHello();
}


OnceAgainSayHello();




