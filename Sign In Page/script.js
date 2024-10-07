const Email = document.getElementById(`EmailField`);
const Password = document.getElementById(`PasswordField`);

function SignIn() {
    if (Email.value === `` && Password.value === ``) {
        Email.style.border = `1px solid red`;
        Password.style.border = `1px solid red`;

        document.querySelectorAll(`.Invalid`).forEach(invalid => {
            invalid.style.display = `block`
        })

        setTimeout(function () {
            Email.style.border = `1px solid gray`;
            Password.style.border = `1px solid gray`;

            document.querySelectorAll(`.Invalid`).forEach(invalid => {
                invalid.style.display = `none`
            })

        }, 2500)
    }

    else if (Email.value === ``) {
        Email.style.border = `1px solid red`;

        document.querySelectorAll(`.Invalid`)[0].style.display = `block`

        setTimeout(function () {
            Email.style.border = `1px solid gray`;
            document.querySelectorAll(`.Invalid`)[0].style.display = `none`
        }, 2500)
    }

    else if (Password.value === ``) {
        Password.style.border = `1px solid red`;

        document.querySelectorAll(`.Invalid`)[1].style.display = `block`

        setTimeout(function () {
            Password.style.border = `1px solid gray`;
            document.querySelectorAll(`.Invalid`)[1].style.display = `none`
        }, 2500)
    }

    else if (Email.value !== `` && Password.value !== ``) {
        Email.value = ``;
        Password.value = ``;
    }
}