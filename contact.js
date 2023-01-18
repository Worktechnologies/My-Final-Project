const form=document.getElementById("Contact")
form.element['firstname']
form.element['Lastname'];
form.element['Businessname'];
form.element['Email'];
form.element['Message'];

const firstname=form.element['firstname'];
const Lastname=form.element['Lastname'];
const Businessname=form.element['Businessname'];
const Email=form.element['Email'];
const Message=form.element['Message'];


let FirstName= firstname.value;
let LastName=Lastname.value;
let BusinessName=Businessname.value;
let EmailAddress= Email.value;
let Messagefield=Message.value;


function showMessage(input,message,type){
//get the small element and set the message
const mesg=input.parentNode.queryselector("small");
mesg.innerText = message;
//Update the class for the input
input.ClassName=type? "success" : "error";
return type;
}
function showError(input,message)
{
    return showMessage(input,message,false)
}
function showSuccess(input)
{
    return showMessage(input, " ",true);
}

function hasValue(input,message)
{
    if(input.value.trim() =="")
    {
        return showError(input,message);
    }
    return showSuccess(input);
}

function validateEmail(input,requierdmsg, invalidmsg)
{
    //check if the email is not empty

   if (!hasValue(input, requierdmsg))
   {
    return false;
   }
   // validate email format

   const EmailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const Email=input.value.trim();
   if(!EmailRegex.test(Email))
   {
    return showError(input, invalidmsg);
   }
   return true;

}
form=document.querySelector("#Contact");
const FIRSTNAME_Required="please enter yoyr first name";
const EMAIL_Required="please enter your email";
const EMAIL_Invalid="please enter a correct email address format";
form.addEventListener("submit", function(event)
{
    //stop form submission
   event.preventDefault();

   //validate the form
   let nameValid=hasValue(form.element["firstname"], FIRSTNAME_Required);
   let emailValid=validateEmail(form.element["Email"], EMAIL_Required, EMAIL_Invalid);
    if(nameValid&& emailValid)
    {
        alert("form is submitted");
    }

})
