window.onload = async function(){

    anounceInfo();
    getUnities();
    getRankStatus();
}


async function anounceInfo(){

    try {
  
        let uId = sessionStorage.getItem('user_id');
  
        let userLoaded = await $.ajax({
    
          url: `/api/users/${uId}`,
          method: 'GET',
          dataType: 'json',
        });
  

        let html = `<h4>${userLoaded.nome} ${userLoaded.apelido}</h4>`; 
    
        document.getElementById('Name-Profile-show').innerHTML = html;
  
        if(userLoaded.type == 1){
  
          // mudar as opcoes de barra lateral
          document.getElementById('a1').style.visibility = 'hidden';
          document.getElementById('a2').style.visibility = 'hidden';
          document.getElementById('a3').style.visibility = 'hidden';
  
          document.getElementById('a1').style.position = 'absolute';
          document.getElementById('a2').style.position = 'absolute';
          document.getElementById('a3').style.position = 'absolute';
  
          // mudar as caixas de estatistica
          
  
        } else if(userLoaded.type == 2){
  
  
          document.getElementById('a1').style.visibility = 'hidden'; // pages
          document.getElementById('a2').style.visibility = 'hidden'; // file manager
          document.getElementById('a3').style.visibility = 'hidden'; // icons
          document.getElementById('a4').style.visibility = 'hidden'; // recibos
          document.getElementById('a6').style.visibility = 'hidden'; // anuncios
          document.getElementById('a7').style.visibility= 'hidden' // ranks
          document.getElementById('a8').style.visibility = 'hidden'; // requisitos
  
          document.getElementById('a1').style.position = 'absolute';
          document.getElementById('a2').style.position = 'absolute';
          document.getElementById('a3').style.position = 'absolute';
          document.getElementById('a4').style.position = 'absolute';
          document.getElementById('a6').style.position = 'absolute';
          document.getElementById('a7').style.position = 'absolute';
          document.getElementById('a8').style.position = 'absolute';
        }

        console.log(userLoaded);

        document.getElementById('gender-box').placeholder = userLoaded.genero;

        document.getElementById('name-box').placeholder = userLoaded.nome;

        document.getElementById('apelido-box').placeholder = userLoaded.apelido;

        document.getElementById('number-box').placeholder = userLoaded.telefone;

        document.getElementById('date-box').placeholder = userLoaded.birthday;

        document.getElementById('email-box').placeholder = userLoaded.email;

        
  
      } catch (error) {
        
        console.log(error);
      }
}

async function getUnities(){

  try {
    

    let disciplinas = await $.ajax({

      url: `/api/dashboard/disciplinas`,
      method: 'GET',
      dataType: 'json',

    });

    console.log(disciplinas);

    let html = `<option value="" disabled selected>Selecione uma disciplina</option>`;

    for( let list of disciplinas){

      html+= `<option value="${list.disciplina_id}">${list.nome}</option>`
    }

    console.log(html);
    document.getElementById('Disciplinas-select').innerHTML = html;

  } catch (error) {
    console.log(error);
  }
}

async function getRankStatus(){

  try {
    

    let rankUser = await $.ajax({

      url: `/api/dashboard/rank/${sessionStorage.getItem('user_id')}`,
      method: 'GET',
      dataType: 'json',

    });

    console.log(rankUser);


    if(sessionStorage.getItem('type') == 1){

      let html = `<small> ${rankUser.estatuto}</small>`
    document.getElementById('estatuto-show').innerHTML = html;

    } else if(sessionStorage.getItem('type') == 2){

      let html = `<small> Aluno </small>`
    document.getElementById('estatuto-show').innerHTML = html;
    }

  } catch (error) {
    console.log(error);
  }
}

async function createAnounce(){

  try {
    
    

    let anounce = {

      preco: document.getElementById('input-price').value,
      descricao_aula: document.getElementById('class-method').value,
      descricao_explicador: document.getElementById('description-anounce').value,
      titulo: document.getElementById('input-title-anounce').value,
      fk_explicador_id: sessionStorage.getItem('user_id'),
      fk_disciplina_id: document.getElementById('Disciplinas-select').value,
      fk_rank_id: sessionStorage.getItem('rank_id'),
    };

    console.log(anounce);

    let postAnounce = await $.ajax({

      url: '/api/dashboard/newAnounce',
      method: 'POST',
      data: JSON.stringify(anounce),
      dataType: 'json',
      contentType: 'application/json',
    });

    
  } catch (error) {
    
    console.log(error);
  }

}

