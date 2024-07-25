let time = document.getElementById("current_time");

setInterval(()=>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)

let c = new Date();
let date = c.getDate();
let month = c.getMonth() +1;
let year = c.getFullYear();
let fullYear = document.getElementById("current_date");
fullYear.innerHTML = `${date}/${month}/${year}`;

// Get the display element
const display = document.querySelector('.input');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function del() {
    display.value = display.value.slice(0, -1);
}

// Function to append characters to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to perform calculation
function calculate() {
    try {
        // Evaluate the expression and display the result
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error, display "Error"
        display.value = 'Error';
    }
}

