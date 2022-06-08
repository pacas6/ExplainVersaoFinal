window.onload = async function(){

    postDash();
}

async function postDash(){


    try {
        
        if(sessionStorage.getItem('user_id') != null){

            document.getElementById('Signin_btn').style.visibility = 'hidden';
            document.getElementById('register_btn').style.visibility = 'hidden';
            
            document.getElementById('Signin_btn').style.position = 'absolute';

            document.getElementById('register_btn').style.position = 'absolute';

            document.getElementById('hiper').style.visibility = 'visible'
            document.getElementById('hiper').style.position = 'relative';

            document.getElementById('corner-image').style.visibility = 'visible'
            document.getElementById('corner-image').style.position = 'relative';

        }
    } catch (error) {
        
    }
}