const db = require('../database/db');

class Livro {
    async criar(item) {
        try {
            const query = 'INSERT INTO livros (titulo, isbn, autor, editora, ano) VALUES (?, ?, ?, ?, ?)';
            const values = [item.titulo, item.isbn, item.autor, item.editora, item.ano];
            
            await db.query(query, values);
            
            return { status: 200, response: 'Livro cadastrado com sucesso!' };
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
            return { status: 500, response: 'Erro ao cadastrar livro no banco de dados.' };
        }
    }

    async listar() {
        try {
            const query = 'SELECT * FROM livros';
            const res = await db.query(query);
            
            return { status: 200, response: res[0] };
        } catch (error) {
            console.error('Erro ao obter livros:', error);
            return { status: 500, response: 'Erro ao obter livros do banco de dados.' };
        }
    }

    async listarPorId(id) {
        try {
            const query = 'SELECT * FROM livros WHERE id = ?';
            const res = await db.query(query, [id]);
            
            return { status: 200, response: res[0] };
        } catch (error) {
            console.error('Erro ao obter livro:', error);
            return { status: 500, response: 'Erro ao obter livro do banco de dados.' };
        }
    }

    async atualizar(item, id) {
        try {
            const query = 'UPDATE livros SET titulo = ?, isbn = ?, autor = ?, editora = ?, ano = ? WHERE id = ?';
            const values = [item.titulo, item.isbn, item.autor, item.editora, item.ano, id];
            
            await db.query(query, values);
            
            return { status: 200, response: 'Livro atualizado com sucesso!' };
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
            return { status: 500, response: 'Erro ao atualizar livro no banco de dados.' };
        }
    }

    async excluir(id) {
        try {
            const query = 'DELETE FROM livros WHERE id = ?';
            await db.query(query, [id]);
            
            return { status: 200, response: 'Livro excluído com sucesso!' };
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
            return { status: 500, response: 'Erro ao excluir livro do banco de dados.' };
        }
    }
}

module.exports = Livro;
