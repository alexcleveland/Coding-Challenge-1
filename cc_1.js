//Task 1: Variables and Data Types

let employeeName = "Tim Tom";
const employeeID = 21;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2:Compound Data Types

let products = ["Xbox", "TV","Remote"];
const productDetails = {
    name: 321,
    price: 2000.00,
    inStock: "yes",
}
console.log(products, productDetails);


// Task 3: Assignment Operators

let accountBalance = 420;
console.log(accountBalance);

accountBalance += 1000;
console.log(accountBalance);

accountBalance -= 500;
console.log(accountBalance);

accountBalance *= 10;
console.log(accountBalance);

accountBalance /= 4;
console.log(accountBalance);

accountBalance %= 20;
console.log(accountBalance);

// Task 4: Comparison Operators

let employeeScore1 = 75;
let employeeScore2 = 50;

console.log(employeeScore1);
console.log(employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);

// Task 5: Logical Operators

let hasKeyCard = true;
let hasPermission = false;
console.log(hasKeyCard);
console.log(hasPermission);

let topSecretArea = hasKeyCard && hasPermission;
console.log(topSecretArea);

let theWaitingroom = hasKeyCard || hasPermission;
console.log(theWaitingroom);

let hasNoKeycard = !hasKeyCard;
console.log(hasNoKeycard);

// YaY All Done
















