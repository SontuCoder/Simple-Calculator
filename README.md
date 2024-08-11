<h1>Calculator</h1>
<h5>By, Subhadip Maity</h5>
#Calculator Web Application
This is a simple calculator web application that allows users to perform basic arithmetic operations. The application includes a display, a keypad, and features for clearing and deleting input, as well as displaying the current date and time.

##Features
-**Basic Arithmetic Operations:** Supports addition, subtraction, multiplication, and division.
-**Real-time Date and Time:** Displays the current date and time, which updates every second.
-**Clear and Delete:** Options to clear the entire input or delete the last character.
-**Responsive Design:** The layout is designed to be responsive, ensuring a good user experience on different devices.
##Project Structure
-**index.html:** The main HTML file that structures the layout of the calculator.
-**style.css:** The CSS file that styles the calculator's interface.
-**apps.js:** The JavaScript file that handles the calculator's functionality, including input handling, arithmetic operations, and real-time date and time updates.
##How It Works
-**Date and Time:**
The current date is displayed in the #current_date element in the format DD/MM/YYYY.
The current time is updated every second in the #current_time element using JavaScript's setInterval function.
-**Display:**
User inputs are displayed in the text field with the class input.
The display is updated as the user clicks the buttons on the keypad.
-**Keypad Functionality:**
Number and Operator Buttons: When a user clicks a number or operator button, the corresponding value is appended to the display.
Clear (C) Button: Clears the entire display.
Delete (Del) Button: Deletes the last character in the display.
Equal (=) Button: Evaluates the expression shown in the display and shows the result.
##How to Use
Open index.html in a web browser.
Use the buttons on the keypad to input your desired arithmetic expression.
Click the = button to calculate the result.
Use the C button to clear the display or the Del button to delete the last character.
