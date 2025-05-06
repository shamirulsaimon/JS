function calculator(num1=0, operator='+', num2=0) {
    switch(operator){

	    case '+':
		    return num1 + num2;
	    case '-':
		    return num1 - num2;
	    case '*':
		    return num1 * num2;
	    case '/':
		    return num1 / num2;
	    case '%':
		    return num1 % num2;
	    case '**':
		    return num1 ** num2;
	    default:
		    console.log("Error Please Try again with right operator ");
    }
}


let result = calculator(5,'+',20);
let result2 = calculator(5,'*',20);
console.log(result,result2);