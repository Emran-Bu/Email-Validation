var emailval = document.getElementById('emailVal')
var email = document.getElementById('email')
var emailCount = document.getElementById('emailCount')

function emailValidation() {
    var emailVal = email.value;
    
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailVal.match(pattern)) {
        emailval.classList.add('valid')
        emailval.classList.remove('invalid')
        emailCount.value = 1;
    } else{
        emailval.classList.add('invalid')
        emailval.classList.remove('valid')
        emailCount.value = 0;
    }
}

var passwordVal = document.getElementById('passwordVal');

function passwordValidation() {
    var password = document.getElementById('password').value;

    var pattern = /^[^ ]{7,19}$/;

    if (password.match(pattern)) {
        passwordVal.classList.add('valid');
        passwordVal.classList.remove('invalid');
        document.getElementById('passwordCount').value = 1;
    } else{
        passwordVal.classList.add('invalid');      
        passwordVal.classList.remove('valid');
        document.getElementById('passwordCount').value = 0;
    }
}


var confirmPasswordVal = document.getElementById('confirmPasswordVal')

function confirmPasswordValidation() {
    var confirmPassword = document.getElementById('confirmPassword').value;

    var password = document.getElementById('password').value;

    if (password === confirmPassword) {
        confirmPasswordVal.classList.add('valid');
        confirmPasswordVal.classList.remove('invalid');
        document.getElementById('confirmPasswordCount').value = 1;
    } else{
        confirmPasswordVal.classList.add('invalid');      
        confirmPasswordVal.classList.remove('valid');
        document.getElementById('confirmPasswordCount').value = 0;
    }
}


let submit = document.getElementById('submit')


document.addEventListener("keyup", function(){

    var checkEmail = document.getElementById('emailCount').value;

    var checkPassword = document.getElementById('passwordCount').value;

    var checkConfirmPassword = document.getElementById('confirmPasswordCount').value;

    if(checkEmail==1 && checkPassword==1 && checkConfirmPassword==1){

    //   submit.removeAttribute('disabled');
      var btnSubmit = document.getElementById('btnSubmit');
      btnSubmit.classList.add('ac');

    }else{
    //   submit.setAttribute('disabled','disabled');
      var btnSubmit = document.getElementById('btnSubmit');
      btnSubmit.classList.remove('ac');
    }
  });