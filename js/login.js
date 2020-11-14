


function validate()
{

    var mail = document.getElementById("email").value;
    var pwd1 = document.getElementById("pwd").value;
    var lab=document.getElementById("check");
    var lab_pass=document.getElementById("check-pass");
    var lab_mail=document.getElementById("check-mail");

    var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,5})?$/;

   
    if(regx.test(mail) && pwd1)
    {
     lab.innerHTML="valid";
     lab.style.color="Green";
     lab.style.visibility="visible";
 
     return true;
 
    }
    else{
     
     lab_mail.style.visibility="visible";
     email.style.border="3px solid red";
     pwd.style.border="3px solid red";

          
     return false;
    }
   
   
   
   
    if(pwd.value.length<5)
    {

    }
    else
    {
        return true;
    }
}

