let email = document.getElementById('email');
        let password = document.getElementById('password');
        let passwordConfirm = document.getElementById('passwordConfirm');
        let btnSend = document.getElementById('btnSend');


        function emailValidation () {
            for (let i = 0; i < email.length; i++) {
                if (email[i] === '@'){
                    console.log('si hay un @');    
                }
                else {
                    console.log('El formato ingresado no es el correcto; necesitas un @');
                } 
            }
        }

        let validEmail = emailValidation(email);

        function getInputInfo(){
            if (validEmail) {
                console.log('El formato de correo es correcto');
                email.style = 'border: 1px solid green';
            }
            else {
                console.log('El formato de correo es incorrecto');
                email.style = 'border: 1px solid red';
            }
            

            if (password.length >= 7) {
                console.log('Contraseña correcta');
                password.style = 'border: 1px solid green';
            }
            else {
                console.log('Contraseña debe contener al menos 8 caractéres');
                password.style = 'border: 1px solid red';
            }

            if (email && (password === passwordConfirm)){
                console.log('Todos los campos se llenaron de forma correcta');
                passwordConfirm.style = 'border: 1px solid green';
            }
            else {
                console.log('Existe un error en el ingreso de datos en el formulario, favor validar campos');
                passwordConfirm.style = 'border: 1px solid red';
            }
        }


        btnSend.addEventListener('click', getInputInfo);  