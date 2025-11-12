var loginEmailInput = document.getElementById('login-email')
var loginPasswordInput = document.getElementById('login-password')
var errorMsg = document.getElementById('error-message')
var incorrectMsg = document.getElementById('incorrect-message')
var loginBtn = document.getElementById('loginBtn')

var userList=[];
if(localStorage.getItem('users') != null){
    userList = JSON.parse(localStorage.getItem('users'))
}

function login(){
    if(loginValidation()){
        return;
    }
    for(var i=0; i< userList.length; i++){
        if(userList[i].email == loginEmailInput.value && userList[i].password == loginPasswordInput.value){
            localStorage.setItem('userDetails' , JSON.stringify( userList[i]))
            window.location.href = "html files/home.html"
            clearForm()
        }
    }
    incorrectMsg.classList.remove('d-none')
}

function clearForm(){
    loginEmailInput ="";
    loginPasswordInput="";
}

function loginValidation(){
    if(loginEmailInput.value== "" || loginPasswordInput.value == ""){
        errorMsg.classList.remove('d-none')
        incorrectMsg.classList.add('d-none')
        return true;
    }
    else{
        errorMsg.classList.add('d-none')
        return false;
    }
}

loginBtn.addEventListener('click' , function(){
    login()
})