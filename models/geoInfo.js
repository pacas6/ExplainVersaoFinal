var pool = require('./connection');


module.exports.postGeoInfo = async function(userMorada){

    try {
        
        let sql = 'insert into geographyc_cord(geo_coords, fk_morada_id) values ($1, $2)';

        let result = await pool.query(sql,[userMorada.lat+","+userMorada.lng, userMorada.fk_morada_id,]);

        return {

            status : 200, result : result
        };

    } catch (error) {

        console.log(error);

        return {

            status: 500, result: error
        };
        
    }
}

module.exports.getExpGeoCords = async function(){

    try {
        
        let sql = 'select geo_coords, morada.endereço, morada.fk_utilizador_id, utilizador.nome, utilizador.apelido from morada inner join geographyc_cord on geographyc_cord.fk_morada_id = morada.morada_id inner join utilizador on utilizador.user_id = morada.fk_utilizador_id';

        let result = await pool.query(sql);

        let users = result;

        return {

            status : 200, result : users
        };

    } catch (error) {
        
        console.log(error);

        return {

            status: 500, result: error
        };
    }
};

module.exports.getExpGeoCordsById = async function(uId){

    try {
        
        let sql = 'select geographyc_cord.geo_coords, morada.endereço, utilizador.user_id, utilizador.nome, utilizador.apelido from morada inner join geographyc_cord on geographyc_cord.fk_morada_id = morada.morada_id inner join utilizador on morada.fk_utilizador_id = utilizador.user_id where morada.fk_utilizador_id = $1';

        let result = await pool.query(sql,[uId]);

        if(result.rows.length > 0) return {status : 200, result : result.rows[0]};
        else return{status : 404 , result : {msg: 'user não encontrado'}}

    } catch (error) {
        
        console.log(error);

        return {

            status: 500, result: error
        };

    }
};

module.exports.getAllCountrys = async function(){

    try {
        
        let sql = 'select * from pais';

        let result = await pool.query(sql);

        let users = result;

        return {

            status: 200, result: users
        };
    } catch (error) {
        
        console.log(error);

        return {

            status: 500, result: error
        };
    }
}