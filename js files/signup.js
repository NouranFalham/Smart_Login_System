var signUpNameInput = document.getElementById('signup-name')
var signUpEmailInput = document.getElementById('signup-email')
var signUpPasswordInput = document.getElementById('signup-password')

var addUserBtn = document.getElementById('addUser')

var userList=[];
if(localStorage.getItem('users') != null){
    userList = JSON.parse(localStorage.getItem('users'))
}

function addUser(){
    if(nameValidation() && emailValidation() && passwordValidation() && !emailCheck() ){
        var user = {
        name: signUpNameInput.value.trim(),
        email: signUpEmailInput.value.trim(),
        password: signUpPasswordInput.value.trim()
    }
    userList.push(user)
    localStorage.setItem('users' , JSON.stringify(userList))
    document.getElementById('success-message').classList.remove('d-none')
    clearForm()
    }
} 

function clearForm(){
    signUpNameInput.value="";
    signUpEmailInput.value="";
    signUpPasswordInput.value="";
    signUpNameInput.classList.remove('is-valid')
    signUpNameInput.classList.remove('is-invalid')
    signUpEmailInput.classList.remove('is-valid')
    signUpEmailInput.classList.remove('is-invalid')
    signUpPasswordInput.classList.remove('is-valid')
    signUpPasswordInput.classList.remove('is-invalid')
}


addUserBtn.addEventListener('click' , function(){
    addUser()
})

function emailCheck(){
    for(var i=0; i<userList.length; i++){
        if(signUpEmailInput.value.trim() == userList[i].email){
            document.getElementById('email-alert').classList.remove('d-none')
            document.getElementById('success-message').classList.add('d-none')
            return true;
        }
    }  
    document.getElementById('email-alert').classList.add('d-none')
    return false; 
}

function nameValidation(){
    var nameMsg = document.getElementById('name-message')
    var regex = /^[A-Za-z]{2,}$/
    var text = signUpNameInput.value.trim();
    if(regex.test(text)){
        nameMsg.classList.add('d-none')
        signUpNameInput.classList.add('is-valid')
        signUpNameInput.classList.remove('is-invalid')
        return true;
    }
    else{
        nameMsg.classList.remove('d-none')
        signUpNameInput.classList.remove('is-valid')
        signUpNameInput.classList.add('is-invalid')
        return false;
    }
}
function emailValidation(){
    var emailMsg = document.getElementById('email-message')
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var text = signUpEmailInput.value.trim();
    if(regex.test(text)){
        emailMsg.classList.add('d-none')
        signUpEmailInput.classList.add('is-valid')
        signUpEmailInput.classList.remove('is-invalid')
        return true;
    }
    else{
        emailMsg.classList.remove('d-none')
        signUpEmailInput.classList.remove('is-valid')
        signUpEmailInput.classList.add('is-invalid')
        return false;
    }
}
function passwordValidation(){
    var passMsg = document.getElementById('password-message')
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var text = signUpPasswordInput.value.trim();
    if(regex.test(text)){
        passMsg.classList.add('d-none')
        signUpPasswordInput.classList.add('is-valid')
        signUpPasswordInput.classList.remove('is-invalid')
        return true;
    }
    else{
        passMsg.classList.remove('d-none')
        signUpPasswordInput.classList.remove('is-valid')
        signUpPasswordInput.classList.add('is-invalid')
        return false;
    }
}

signUpNameInput.addEventListener('input' , nameValidation)
signUpEmailInput.addEventListener('input' , emailValidation)
signUpPasswordInput.addEventListener('input' , passwordValidation)


signUpNameInput.addEventListener('input' , hideSuccessMessage)
signUpEmailInput.addEventListener('input' , hideSuccessMessage)
signUpPasswordInput.addEventListener('input' , hideSuccessMessage)

function hideSuccessMessage() {
    document.getElementById('success-message').classList.add('d-none');
}

