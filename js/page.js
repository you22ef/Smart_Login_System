
var welcome = document.querySelector('.welcome');


var user = localStorage.getItem('name');
welcome.innerHTML = `Welcome ${user} `;



