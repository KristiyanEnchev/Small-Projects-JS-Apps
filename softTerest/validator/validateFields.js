
export function validateInput(form, data) {
    let isValid = true;
    let email = form.querySelector('input[id="inputEmail"]');
    let password = form.querySelector('input[id="inputPassword"]');
    let rePass = form.querySelector('input[id="inputRepeatPassword"]');

    if (data.email.length < 3) {
        isValid = false;
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        // showNotification('email should be more than 3 charecters', 'error', ctx);
    } else {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
    }

    if (data.password.length < 3) {
        isValid = false;
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        // showNotification('Password should be more than 3 charecters', 'error', ctx);

    } else {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
    }

    if (data.password != data.repass || data.repass == '') {
        isValid = false;
        rePass.classList.add('is-invalid');
        rePass.classList.remove('is-valid');
        // showNotification('Password dont match', 'error', ctx);

    } else {
        rePass.classList.add('is-valid');
        rePass.classList.remove('is-invalid');
    }

    setTimeout(function(){email.classList.remove("is-invalid")}, 3000);
    setTimeout(function(){email.classList.remove("is-valid")}, 3000);
    setTimeout(function(){password.classList.remove("is-invalid")}, 3000);
    setTimeout(function(){password.classList.remove("is-valid")}, 3000);
    setTimeout(function(){rePass.classList.remove("is-invalid")}, 3000);
    setTimeout(function(){rePass.classList.remove("is-valid" )}, 3000);
    return isValid;
}