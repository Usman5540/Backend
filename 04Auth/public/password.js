
/* Set up static file serving in Express: Ensure that your Express 
application is set up to serve 
static files from a specific directory.
 You can use the express.static middleware for this purpose.
For example, if you have a directory named public containing your static files (including password.js), you can set it up like this: */
const passwordInput = document.getElementById("password-input");
const togglePasswordButton = document.getElementById("toggle-password");

togglePasswordButton.addEventListener("click", function() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    // actual work is done above which is type of the field basically if th
    // password field type is passowrd then it would not show if the field type is 
    // text then it will not hide 
    // below line just change the name of the button in text
    togglePasswordButton.textContent = type === "password" ? "Show" : "Hide";
});

/* <input type="text" id="myInput" value="Hello" /> 

const inputElement = document.getElementById("myInput");
const valueAttribute = inputElement.getAttribute("value");
console.log(valueAttribute); // Output: "Hello"


togglePasswordButton.textContent = type === "password" ? "Show" : "Hide";
This line sets the text content of the togglePasswordButton based on the current value of type.
If type is "password", it sets the button text to "Show", indicating that clicking it will show the password.
If type is "text", it sets the button text to "Hide", indicating that clicking it will hide the password again.

*/