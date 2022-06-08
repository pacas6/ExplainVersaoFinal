window.onload = async function(){

    getData();
}

async function getData(){

    try {
        
        let expLoaded = await $.ajax({
    
            url: `/api/homeServices/explicadores`,
            method: 'GET',
            dataType: 'json',
        });

        console.log(expLoaded);

        let html = ``
        for(list of expLoaded){

            html += ` <option value="${list.fk_utilizador_id}"> ${list.nome} ${list.apelido}</option> `
        }

        document.getElementById('select-explicador').innerHTML = html;

        
    } catch (error) {
        
        console.log(error);
    }
}