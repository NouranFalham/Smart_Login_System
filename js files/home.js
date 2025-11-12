var user = JSON.parse(localStorage.getItem('userDetails'))
var spanName = document.getElementById('name')
var logOutBtn = document.getElementById('logout')

spanName.innerHTML= user.name;

function logout(){
    localStorage.removeItem('userDetails')
    window.location.href= "../index.html"
}

logOutBtn.addEventListener('click' , function(){
    logout()
})