
const form = document.getElementById('form');
const name = document.getElementById("name");
const email = document.getElementById('email');
const password = document.getElementById('password');
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");

form.addEventListener('submit',(e) => {

   var email_chech =/^([A-Za-z0-9_\-\.])+\@([A-za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      
          if(name.value === '' || name.value == null){
               e.preventDefault();
               name_error.innerHTML = "*Name is required"
            }  
            else{
              name_error.innerHTML = ""
                 
          }

          if(!email.value.match(email_chech))
          {
            e.preventDefault();
            email_error.innerHTML = "*valid email is required"
        }
        else{
              email_error.innerHTML = ""

          }

          if(password.value.length <=8){
            e.preventDefault();
            password_error.innerHTML = "*password required atleast 8 characters"
        } 
        else{
           password_error.innerHTML = ""

       }  


})
