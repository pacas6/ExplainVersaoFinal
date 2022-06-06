async function login() {

    try {

      let object = {
        email: document.getElementById("emailLogin").value,
        password: document.getElementById("passwordLogin").value,
      };

      let user = await $.ajax({
        url: `/api/users/login`,
        method: "post",
        dataType: "json",
        data: JSON.stringify(object),
        contentType: "application/json",
      });

      console.log(user.user_id);
      sessionStorage.setItem("user_id", user.user_id);
      window.alert("login sucesfully");

      if (user.user_id){

        window.location = 'DashBoard.html';
          
      }
    
    } catch (err) {
        console.log(error);
        window.alert('just something wrong');
    }
}
