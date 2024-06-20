

var name1 = document.querySelector('#Name');
var email = document.querySelector('#Email');
var password = document.querySelector('#Password');
var button = document.querySelector('#SignUpBtn');
var alert1 = document.querySelector('.al1');


button.addEventListener('click', function(e) {
    storeData();
});

name1.addEventListener('keyup', function(e) {
    validation(name1);
});

email.addEventListener('keyup', function(e) {
    validation(email);
});

password.addEventListener('keyup', function(e) {
    validation(password);
}
);

var data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

function storeData()
{
    
    var userData = 
    {
        Name: name1.value,
        Email: email.value,
        Password: password.value
    };
    validation(name1);
    validation(email);
    validation(password);
    if(data.length != 0)
    {
        var check = checkEmail(email);
    }
    else
    {
        check = true;
    }
   
    
    if(email.classList.contains('is-valid') && password.classList.contains('is-valid') && name1.classList.contains('is-valid') && check)
    {

        data.push(userData);
        console.log(data);
        localStorage.setItem('users',JSON.stringify(data));
        clearForm();
        window.location.href = "index.html";
    }

    
}

function checkEmail(emailElement)
{
    var users = JSON.parse(localStorage.getItem('users'));
    for(var i = 0; i < users.length; i++)
    {
       
        if(emailElement.value == users[i].Email)
        {
            alert1.innerHTML = 'Email already exists!';
            emailElement.classList.add("mb-3");
            emailElement.nextElementSibling.classList.remove("d-none");
            emailElement.classList.remove("is-valid");
            emailElement.classList.add("is-invalid");
            return false;
        }
    }

    return true;

}

function clearForm()
{
    email.value = '';
    password.value = '';
    email.classList.remove("is-valid");
    password.classList.remove("is-valid");

}

function validation(element)
{
    var regex =
    {
        Name: /^[ \w]{3,30}$/,
        Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
        Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,

    };
    
    if(regex[element.id].test(element.value))
    {
        
        element.classList.remove("mb-3");
        element.classList.add("is-valid");
        element.nextElementSibling.classList.add("d-none");
        element.classList.remove("is-invalid");
    }
    else
    {
        if(element.id === 'Email')
        {
            alert1.innerHTML = "'Invalid email! Email must be 2-10 letters, optionally followed by up to 4 digits, and must end with \'@gmail.com\' or \'@yahoo.com\'.'"
        }
        element.classList.add("mb-3");
        element.nextElementSibling.classList.remove("d-none");
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
    }
}