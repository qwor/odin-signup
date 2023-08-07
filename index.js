const $ = document.querySelector.bind(document);
const PASSWORDS_MATCH = 'Passwords must match'

const 
    signupForm = $('#signup-form'),
    firstname = $('#firstname'),
    lastname = $('#lastname'),
    email = $('#email'),
    phone = $('#phone'),
    password = $('#password'),
    repeatPassword = $('#repeat-password'),
    firstnameError = $('#firstname+span'),
    lastnameError = $('#lastname+span'),
    emailError = $('#email+span'),
    phoneError = $('#phone+span'),
    passwordError = $('#password+span'),
    repeatPasswordError = $('#repeat-password+span');

firstname.oninput = () => {
    if (firstname.checkValidity()) 
        firstnameError.textContent = ''
    else 
        firstnameError.textContent = firstname.validationMessage
}

lastname.oninput = () => {
    if (lastname.checkValidity()) 
        lastnameError.textContent = ''
    else 
        lastnameError.textContent = lastname.validationMessage
}

email.oninput = () => {
    if (email.checkValidity()) 
        emailError.textContent = ''
    else 
        emailError.textContent = email.validationMessage
}

phone.oninput = () => {
    if (phone.checkValidity()) 
        phoneError.textContent = ''
    else 
        phoneError.textContent = phone.validationMessage
}

password.oninput = () => {
    if (password.checkValidity()) 
        passwordError.textContent = ''
    else 
        passwordError.textContent = password.validationMessage
}

repeatPassword.oninput = () => {
    if (repeatPassword.checkValidity()) {
        if (repeatPassword.value === password.value) {
            repeatPasswordError.textContent = ''
        } else {
            repeatPasswordError.textContent = PASSWORDS_MATCH
            repeatPassword.setCustomValidity(PASSWORDS_MATCH)
        }
    } else {
        repeatPasswordError.textContent = repeatPasswordError.validationMessage
    }
}

signupForm.onsubmit = (e) => {
    arePasswordsSame = password.value === repeatPassword.value
    if (!firstname.checkValidity() || !lastname.checkValidity() ||
        !email.checkValidity() || !phone.checkValidity() ||
        !password.checkValidity() || !repeatPassword.checkValidity() ||
        !arePasswordsSame) {
        e.preventDefault()
    }
    if (!firstname.checkValidity()) firstnameError.textContent = firstname.validationMessage
    if (!lastname.checkValidity()) lastnameError.textContent = lastname.validationMessage
    if (!email.checkValidity()) emailError.textContent = email.validationMessage
    if (!phone.checkValidity()) phoneError.textContent = phone.validationMessage
    if (!password.checkValidity()) passwordError.textContent = password.validationMessage

    if (!repeatPassword.checkValidity()) repeatPasswordError.textContent = repeatPassword.validationMessage
    else if (!arePasswordsSame) {
        repeatPasswordError.textContent = PASSWORDS_MATCH
        repeatPassword.setCustomValidity(PASSWORDS_MATCH)
    }
}