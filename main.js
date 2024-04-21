let employee = {
    name: ['Biff', 'Henderson'],
    employeeNumber: 30573,
    department: "Repossesions",
    interests: ['the Mob', 'fast cars', 'baseball'],
    active: true
}

const paragraphElement = document.querySelector("#target-paragraph-id");
const fullName = employee.name[0] + employee.name[1];
const employeeSignature = "[<" + employee.employeeNumber + ">: " + fullName + "]";
let formattedInterests = "";
let activityStatus = "inactive";

if (employee.active) {
    activityStatus = "active";
}  

// Typo #1: I accidentally wrote `int` instead of `let`.
for (let i = 0; i < 3; i++) {
    formattedInterests += employee.interests[i];
    if (i != 2) {
        formattedInterests += ", ";
        if (i == 1) {
            // Typo #2: Accidentally deleted part of this line of code.
            formattedInterests += " and "
        }
    }
}

const output = employeeSignature + " is an " + activityStatus + " employee within the 'Department of " + employee.department + "'. Their interests are " + formattedInterests + ".";

paragraphElement.textContent = output;