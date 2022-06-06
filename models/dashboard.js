var pool = require('./connection');

module.exports.getUsersCount = async function(){

    try {
        
        let sql = 'select * from utilizador';

        let result = await pool.query(sql);

        let users = result.rows;

        return{

            status: 200, result: users
        };

    } catch (error) {
        
        return {

            status: 500, result: error
        };

    }
}

module.exports.getAllDisciplinas = async function(){

    try {
        
        let sql = 'select * from disciplina';

        let result = await pool.query(sql);

        let users = result.rows;

        return{

            status: 200, result: users
        };

    } catch (error) {
        
        console.log(error);
    }

}

module.exports.getRankByUserId = async function(uId){

    try {
        
        try {
        
            let sql = 'select utilizador.nome, utilizador.apelido, explicador.explicador_id, explicador.fk_rank_id, rank.estatuto from utilizador inner join explicador on utilizador.user_id = explicador.explicador_id inner join rank on explicador.fk_rank_id = rank.rank_id where utilizador.user_id = $1';
    
            result = await pool.query(sql,[uId]);
    
            if(result.rows.length > 0) return {status : 200, result : result.rows[0]};
            else return{status : 404 , result : {msg: 'Rank não encontrado'}}
    
        } catch (error) {
    
            console.log(error);
    
            return {
    
                status: 500, result: error
            };
    
        }
    } catch (error) {
        
    }

}

module.exports.newAnouce = async function(anounce){


    try {
        
        let sql = 'insert into anuncio (preco, descricao_aula, descricao_explicador, titulo, fk_explicador_id, fk_disciplina_id, fk_rank_id) values ($1,$2,$3,$4,$5,$6,$7)'

        let result = await pool.query(sql,[anounce.preco, anounce.descricao_aula, anounce.descricao_explicador, anounce.titulo, anounce.fk_explicador_id, anounce.fk_disciplina_id, anounce.fk_rank_id,])

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

