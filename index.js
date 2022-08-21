let email = document.getElementById('email');
let emailError = document.getElementById('email-error');

email.addEventListener('focus',event => focusHanlde(event.target));
function focusHanlde(elem){
    elem.style.border = "1px solid hsl(223, 100%, 88%)"
    emailError.style.visibility ="hidden";
}
function validate() {

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.value.match(mailformat)){
        email.style.border ="1px solid red";
        emailError.style.visibility = "visible";
    
        return false;
    }
    return true;
}