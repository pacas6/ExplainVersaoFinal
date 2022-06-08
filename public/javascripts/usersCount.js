window.onload = async function (){

    showUsersCount();
    refreshDataPage();
    getDataFromRegister();
    getUserMorada();
}

async function showUsersCount(){

    try {
        
        let values = await $.ajax({
            url: `/api/users/`,
            method: 'GET',
            datatype: 'json',
        });

        console.log(values)

        let html = `<h1>${values.rowCount}</h1>`
        document.getElementById('CardValue').innerHTML = html;
        document.getElementById('CardValue2').innerHTML = html;

        
    } catch (error) {
        console.log(error);
    }
}


async function refreshDataPage(){

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
        document.getElementById('box-1').innerText = 'numero de Alunos';
        document.getElementById('box-1-image').innerHTML= '<span class="las la-users"></span>'

        document.getElementById('box-2').innerText = 'Pedidos Recebidos';
        document.getElementById('box-2-image').innerHTML = '<span class="las la-paper-plane"></span>';

        document.getElementById('box-3').innerText = 'Explicações Dadas';
        document.getElementById('box-3-image').innerHTML = '<span class="las la-graduation-cap"></span>'
        
        document.getElementById('box-4').innerText = 'Lucro';
        document.getElementById('box-4-image').innerHTML= '<span class="las la-hand-holding-usd"></span>'
        document.getElementById('estatuto-show').innerHTML='<h4> Professor </h4>'

        let html = `<h3>Pedidos recentes</h3>`
        document.getElementById('recent').innerHTML = html;

        let html1 = ` <td>Aluno</td>
                      <td>Data</td>
                      <td>Status</td>`
        
        document.getElementById('table-row').innerHTML = html1;

        


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


        document.getElementById('box-1').innerText = 'Total de Aulas';
        document.getElementById('box-1-image').innerHTML = '<span class="las la-school"></span>'

        document.getElementById('box-2').innerText = 'Horas de explicação';
        document.getElementById('box-2-image').innerHTML = '<span class="las la-clock"></span>';

        document.getElementById('box-3').innerText = 'Disciplinas';
        document.getElementById('box-3-image').innerHTML = '<span class="las la-graduation-cap"></span>';
        
        document.getElementById('box-4').innerText = 'Lucro';
        document.getElementById('box-4-image').innerHTML= '<span class="las la-hand-holding-usd"></span>';
        document.getElementById('estatuto-show').innerHTML='<h4> Aluno </h4>'

      }


    } catch (error) {
      
      console.log(error);
    }
};

async function getUserMorada(){

  try {
    

    let uid = sessionStorage.getItem('user_id');

    let moradaUser = await $.ajax({
      url: `/api/users/moradaUser/${uid}`,
      method: 'GET',
      datatype: 'json',
    });

    console.log(moradaUser);

    sessionStorage.setItem('morada_id', moradaUser.morada_id)

    
    
  } catch (error) {
    console.log(error);
  }
}

async function getDataFromRegister(){

  try {
    

    console.log(sessionStorage.getItem('zip-code'));
    console.log(sessionStorage.getItem('address'));
    console.log(sessionStorage.getItem('user_id'));


    var address = `${sessionStorage.getItem('address')} ${sessionStorage.getItem('zip-code')}`;

    console.log(address);

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': address}, function(results, status){

        if(status == 'OK') {

          let co = JSON.stringify(results[0].geometry.location)
          console.log(co);

          let co2 = JSON.parse(co);

          console.log(co2.lat);

          coordenadas = {

            lat: co2.lat,
            lng: co2.lng,
            fk_morada_id: sessionStorage.getItem('morada_id')
          }

          let PoostCoord = $.ajax({

            url: '/api/geo/postGeoCoord',
            method: 'POST',
            data: JSON.stringify(coordenadas),
            dataType: 'json',
            contentType: 'application/json',
          });

        } else {

          console.log('Geocode was not successful for the following reason: ' + status);
        }

    });

    

  } catch (error) {
    console.log(error);
  }
}



