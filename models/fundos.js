// requisão da conexão feita com a base de dados 
var pool = require('./connection');

module.exports.getAllfundos = async function(){

    // faz tudo que ta dentro do try e se n conseguir vai armazenar o erro dentro da variavel erro
    try {
        
        let sql = 'select * from fundo';

        //
        let result = await pool.query(sql);

        let fundos = result.rows;

        return {

            status : 200, result : fundos
        };

    } catch (error) {
        
        console.log(error);

        return {

            status: 500, result: error
        };
    }
}

module.exports.getFundoById = async function(fId){

    // faz tudo que ta dentro do try e se n conseguir vai armazenar o erro dentro da variavel erro
    try {
        
        let sql = 'select * from fundo where id = $1';

        //
        let result = await pool.query(sql,[fId]);

        if(result.rows.length > 0) return {status : 200, result : result.rows[0]};
        else return{status : 404 , result : {msg: 'fundo não encontrado'}}

    } catch (error) {
        
        console.log(error);

        return {

            status: 500, result: error
        };
    }
}