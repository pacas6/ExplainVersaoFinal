
async function newUser(){

    try {

        let user = {

            nome: document.getElementById('nome_input_registro').value,
            apelido: document.getElementById('apelido_input_registro').value,
            genero: document.getElementById('genero_input_registro').value,
            data: document.getElementById('date_input_registro').value,
            email: document.getElementById('email_input_registro').value,
            telefone: document.getElementById('telefone_input_registro').value,
            password: document.getElementById('senha_input_registro').value,
            type: document.querySelector('input[name= "professor_ratio"]:checked').value,
            endereço: document.getElementById('endereço_input_registro').value,
            cidade: document.getElementById('cidade_input_registro').value,
            codigo_postal: document.getElementById('codigo_postal_input_registro').value,
        };

        let result = await $.ajax({

            url: '/api/users/new',
            method: 'POST',
            data: JSON.stringify(user),
            dataType: 'json',
            contentType: 'application/json',
        });
        
        
        console.log(result.rows[0]);
        window.alert('Registration succesfull');
        sessionStorage.setItem('user_id',result.rows[0].fk_utilizador_id);
        sessionStorage.setItem('type', user.type);
        sessionStorage.setItem('zip-code', user.codigo_postal);
        sessionStorage.setItem('address', user.endereço);
        sessionStorage.setItem('apelido', user.apelido);

        window.location = 'DashBoard.html';


    } catch (error) {
        console.log(error);
        window.alert('just something wrong');
    }
}

