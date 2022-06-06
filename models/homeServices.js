var pool = require('./connection');


module.exports.getExpInfo = async function(){


    try {
        
        let sql = 'select utilizador.nome, utilizador.apelido, explicador.fk_utilizador_id, anuncio.preco, anuncio.descricao_aula,anuncio.descricao_explicador, anuncio.titulo, disciplina.disciplina_nome, rank.estatuto from utilizador inner join explicador on utilizador.user_id = explicador.fk_utilizador_id inner join anuncio on anuncio.fk_explicador_id = explicador.fk_utilizador_id inner join disciplina on anuncio.fk_disciplina_id = disciplina.disciplina_id inner join rank on rank.rank_id = explicador.fk_rank_id'

        let result = await pool.query(sql);

        let explicadores = result.rows;

        return {

            status : 200, result : explicadores
        };

    } catch (error) {
        
        console.log(error)

        return {

            status: 500, result: error
        };
    }
}