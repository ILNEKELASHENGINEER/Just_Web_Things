var x;
var em;
var pass;
function register(){
    x=document.getElementById("name").value;
    em=document.getElementById("email").value;
    pass=document.getElementById("password").value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    //var regPhone=/^\d{10}$/;
    var regName = /\d+$/g;
    if(x==""||regName.test(x)){
        alert("Please enter your name properly");
        // em.focus();
        return false;
    }
    if(em==""||!regEmail.test(em)){
        alert("Please enter a valid e-mail address");
        // em.focus();
        return false;
    }
    if(pass==""){
        alert("Please enter your password");
        // pass.focus();
        return false;
    }
    return true;

}