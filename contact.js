const FIRSTNAME_Required = "please enter yoyr first name";
const EMAIL_Required = "please enter your email";
const EMAIL_Invalid = "please enter a correct email address format";

const form = document.getElementById("Contact")

const firstname = form.elements['firstname'];
const Lastname = form.elements['Lastname'];
const Businessname = form.elements['Businessname'];
const Email = form.elements['Email'];
const Message = form.elements['Message'];

// let FirstName = firstname.value;
// let LastName = Lastname.value;
// let BusinessName = Businessname.value;
// let EmailAddress = Email.value;
// let Messagefield = Message.value;


function showMessage(input, message, type) {
    //get the small element and set the message
    const mesg = document.querySelector("small");
    mesg.innerText = message;
    //Update the class for the input
    input.ClassName = type ? "success" : "error";
    return type;
}
function showError(input, message) {
    return showMessage(input, message, false)
}
function showSuccess(input) {
    return showMessage(input, " ", true);
}

function hasValue(input, message) {
    if (input.value.trim() == "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateName(input, requierdmsg) {
    if (input.value.trim() == "") {
        const mesg = document.querySelector("#name_error");
        mesg.innerText = requierdmsg;
        input.ClassName = type ? "success" : "error";
    }
}
 
function validateEmail(input, requierdmsg, invalidmsg) {
    const mesg = document.querySelector("#email_error");
     //check if the email is not empty
     if (input.value.trim() == "") {
        mesg.innerText = requierdmsg;
        input.ClassName = type ? "success" : "error";
       return false;
   }
   // validate email format
   const EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const Email = input.value.trim();
   if (!EmailRegex.test(Email)) {        
        mesg.innerText = invalidmsg;
        input.ClassName = type ? "success" : "error";
        return false;
   }
   return true;
 }


form.addEventListener("submit", function (event) {

    //stop form submission
    event.preventDefault();
    console.log("inside form");
    
    //validate the form
    let nameValid = validateName(form.elements["firstname"], FIRSTNAME_Required);
    console.log(nameValid)
   let emailValid = validateEmail(form.elements["Email"], EMAIL_Required, EMAIL_Invalid);
   if (nameValid && emailValid) {
       alert("form is submitted");
   }

})
