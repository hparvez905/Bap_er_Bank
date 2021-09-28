//submit button handler

    document.getElementById('login-submit').addEventListener('click',function () {
        const user= document.getElementById('user-email');
        const userId= user.value;
        console.log(userId);

        const userp =document.getElementById('user-password');
        const userPass= userp.value;
        console.log(userPass);

        if (userId== 'parvez@gmail.com' && userPass == '12345') {
            window.location.href='banking.html';
            
        }
        
    })

    