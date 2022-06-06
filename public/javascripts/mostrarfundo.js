
// carregar a pagina
window.onload = async function(){

    loadValues();
    showList();
}

async function loadValues(){

    try {
        let values = await $.ajax({
            url: `/api/fundos/${1}`,
            method: 'GET',
            datatype: 'json',
        });
        console.log(values);
        let html = `<div class="Text1"><h2>Total ganho</h2><p>${values.valor1}€</p></div>
                    <div class="Text2"><h2>Total a receber</h2><p>${values.valor2}€</p></div>
                    <div class="Text3"><h2>withdrawable</h2><p>${values.valor3}€</p></div>`;
                    
        document.getElementById('valores').innerHTML = html;

    } catch (error) {
        console.log('error')
    }
}

async function showList(){

    try {
        let lists = await $.ajax({

            url: '/api/fundos',
            method: 'GET',
            datatype: 'json',
        });
        console.log(lists);
        let html = ``;
        for(let list of lists ){

            html+= `
                        <tr>
                            <td>${list.valor1}€</td>
                            <td>8%€</td>
                            <td>2021-06-05</td>
                            <td>Matematica A</td>
                            <td>Concluida</td>
                            <td>3 Horas</td>
                        </tr>`;
        } 
        console.log(html);           
        document.getElementById('tbody').innerHTML = html;


    } catch (error) {
        
    }
}

