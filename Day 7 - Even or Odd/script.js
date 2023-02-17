var SENTINEL = 0;

// Prints whether the entered number is even or odd
function start(){
	while (true) {
	    let isEvenNumber = prompt("Enter a number: ");
	    
	    if (isEven(isEvenNumber) == true) {
	        console.log("Even");
	    } else if (isEven(isEvenNumber) == false) {
	        console.log("Odd");
	    }
	    
	    if(isEvenNumber == SENTINEL) {
	        console.log("Done!");
	        break;
	    }
	}
}

function isEven(x) {
    
    if (x % 2 == 0) {
        // If x is even then return true
        return true;
    } else {
        // Otherwise return false
        return false;
    }
    
}