
var email = document.querySelector('#Email');

var password = document.querySelector('#Password');

var button = document.querySelector('.btn');

var alert1 = document.querySelector('.al1');

var alert3 = document.querySelector('.al3');

var userName;



if(button!=null)
{
    button.addEventListener('click', function(e)
    {
        login();
    }
    );
}


if(email!=null )
{
    email.addEventListener('keyup', function(e) {
        validation(email);
    });
}

if(password!=null)
{
    password.addEventListener('keyup', function(e) {
        validation(password);
    }
    );
    
}


function logOut()
{
    welcome.innerHTML = '';
}

function searchUser()
{
    var users = JSON.parse(localStorage.getItem('users'));

    for (var i = 0; i < localStorage.length; i++)
    {
        if (email.value == users[i].Email && password.value == users[i].Password)
        {
            userName = users[i].Name;
            
            localStorage.setItem('name', userName); 
            return true;
        }
    }
    return false;
    
}

function login()
{
    validation(email);
    validation(password);
    if(email.classList.contains('is-valid') && password.classList.contains('is-valid'))
    {
        if(searchUser())
        {
            alert3.classList.add("d-none");
            window.location.href = "page.html";
            

        }
        else
        {
            alert3.classList.remove("d-none");
        }
    }

}


function validation(element)
{
    var regex =
    {
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
