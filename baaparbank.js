
// step 1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2: get the email address inside the email input field
    // always remember to use .value to get the text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email)
    // step 3: get the password
    // set id on the html element 
    // get the element
    // get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password)

    // do not verify the password on the client side
    if (email === "bank@gmail.com" && password === 'secret') {
        location.href = "bank.html";
    } else {
        alert('invalid user vhai tumi wrong user id or password is wrong');
    }
})
// step 2:

