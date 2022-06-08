window.onload = async function(){

    anounceInfo();
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
  
        console.log(userLoaded);
        let html = `<h4>${userLoaded.nome} ${userLoaded.apelido}</h4>`; 
    
        document.getElementById('Name-Profile-show').innerHTML = html;

        sessionStorage.setItem('type', userLoaded.type);
  
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
      
  
      sessionStorage.setItem('rank_id',rankUser.fk_rank_id);
  
    } catch (error) {
      console.log(error);
    }
  }