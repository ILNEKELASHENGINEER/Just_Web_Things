(function () {
	'use strict'

	var forms = document.querySelectorAll('.needs-validation')
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()
var a;
var b;
function login(){
	a=document.getElementById("email").value;
	b=document.getElementById("password").value;
	if((a=='nekelash@gmail.com')&&(b=='neke')){
		alert("Login Successfull");
	}
	else{
		alert("Invalid Credentials");
	}
}
