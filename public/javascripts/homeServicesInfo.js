window.onload = async function(){

    explicadoresGet();
    unitesGet();
}


async function explicadoresGet(){

    try {
        

        let expLoaded = await $.ajax({
    
            url: `/api/homeServices/explicadores`,
            method: 'GET',
            dataType: 'json',
          });

        console.log(expLoaded);

        let html = ``
        for(let list of expLoaded){

            html+=`<a href="HomePerfil.html">
            <div class="perfil-div" id="peril-div">

                <ul class="perfil-elements">
                    <img src="https://drive.google.com/uc?export=view&id=1SP1BZBv3ZNEeP5xdDv0q2jXmoY0DLbWG" alt="" id="user-image" width="200px" class="user-image">

                    <h4 id="user-name">
                        ${list.nome} ${list.apelido}
                    </h4>

                    <p class="user-description">
                        ${list.descricao_explicador}
                    </p>

                    <div class="disciplinas-contentor">
                        <p>${list.disciplina_nome}</p>
                        
                    </div>

                    <p class="price-number" id="price-number">
                        ${list.preco}€
                    </p>

                    <p class="estatuto-text" id="estatuto-text">
                        ${list.estatuto}
                    </p>

                    <button class="ver-perfil">
                        Ver Perfil
                    </button>
                </ul>

            </div>
        </a>`
        }

        console.log(html);
        document.getElementById('list-perfil').innerHTML = html;


    } catch (error) {
        console.log(error)
    }
}

async function unitesGet(){

    try {
        
        let disciplinas = await $.ajax({

            url: `/api/dashboard/disciplinas`,
            method: 'GET',
            dataType: 'json',
      
        });

        let html = `<option value="" disabled selected>Selecione uma disciplina</option>`;


        for(let list of disciplinas){

            html += `<option value="${list.discplina_id}">${list.disciplina_nome}</option>`
        }

        document.getElementById('disciplina-option').innerHTML = html;

    } catch (error) {
        console.log(error)
    }
}