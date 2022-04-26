//very easy

//compares firstNum and secondNum then returns the smaller of the two functions
function min( firstNum, secondNum ) {
	if ( firstNum < secondNum ) 
		return firstNum; 
	else 
  	return secondNum; 
}

console.log(min(0, 10)); 
//minimum 0 
console.log(min(0, -10)); 
//minimum -10

//easy

const students = ["student1", "student2", "student3"];{

    let student1 = ["Jonny", "Boi", 18];
    let student2 = ["Sarah", "Beastly", 19];
    let student3 = ["Mark", "Zuckerburg", 20];

        console.log(`Hello, my name is ${student2[0]} ${student2[1]} and I am ${student2[2]} years old.`);
        
}
//medium

var month = prompt ("Enter a number from 1-12.");{

	if (month == 1)
		console.log ("January");
	else if (month == 2)
		console.log ("February");
	else if (month == 3)
		console.log ("March");
	else if (month == 4)
		console.log ("April");
	else if (month == 5)
		console.log ("May");
	else if (month == 6)
        console.log ("June");
	else if (month == 7)
		console.log ("July");
	else if (month == 8)
		console.log ("August");
	else if (month == 9)
		console.log ("September");
	else if (month == 10)
		console.log ("October");
	else if (month == 11)
		console.log ("November");
	else if (month == 12)
		console.log ("December");
	else 
		alert("Error, enter a number from 1-12.");
}

//hard

let trueOrFalse = [0.09 < 0.45]

var bmi= {
	Tom: 0.45,
	Jerry: 0.09
};

console.log(`Tom's BMI is higher than Jerry's, ${trueOrFalse}`);