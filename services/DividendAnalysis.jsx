import { DatabaseConnection } from '../database/database-connection';

const table = 'DividendAnalysis';
const db = DatabaseConnection.getConnection();

/**
 * CRIAÇÃO DE UM NOVO REGISTRO
 * - Recebe um objeto;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o ID do registro (criado por AUTOINCREMENT)
 *  - Pode retornar erro (reject) caso exista erro no SQL ou nos parâmetros.
 */
const create = (obj) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //comando SQL modificável
            tx.executeSql(
                `INSERT INTO ${table} (reportDate) values (?);`,
                [obj.reportDate],
                //-----------------------
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
                    else reject('Error inserting obj: ' + JSON.stringify(obj)); // insert falhou
                },
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });
    });
};

/**
 * ATUALIZA UM REGISTRO JÁ EXISTENTE
 * - Recebe o ID do registro e um OBJETO com valores atualizados;
 * - Retorna uma Promise:
 *  - O resultado da Promise é a quantidade de registros atualizados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const update = (id, obj) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //comando SQL modificável
            tx.executeSql(
                `UPDATE ${table} SET reportDate=? WHERE id=?;`,
                [obj.reportDate],
                //-----------------------
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) resolve(rowsAffected);
                    else reject('Error updating obj: id=' + id); // nenhum registro alterado
                },
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });
    });
};

/**
 * BUSCA UM REGISTRO POR MEIO DO ID
 * - Recebe o ID do registro;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o objeto (caso exista);
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const find = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //comando SQL modificável
            tx.executeSql(
                `SELECT * FROM ${table} WHERE id=?;`,
                [id],
                //-----------------------
                (_, { rows }) => {
                    if (rows.length > 0) resolve(rows._array[0]);
                    else reject('Obj not found: id=' + id); // nenhum registro encontrado
                },
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });
    });
};

/**
 * BUSCA TODOS OS REGISTROS DE UMA DETERMINADA TABELA
 * - Não recebe parâmetros;
 * - Retorna uma Promise:
 *  - O resultado da Promise é uma lista (Array) de objetos;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
 *  - Pode retornar um array vazio caso não existam registros.
 */
const all = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //comando SQL modificável
            tx.executeSql(
                `SELECT * FROM ${table};`,
                [],
                //-----------------------
                (_, { rows }) => resolve(rows._array),
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });
    });
};

/**
 * REMOVE UM REGISTRO POR MEIO DO ID
 * - Recebe o ID do registro;
 * - Retorna uma Promise:
 *  - O resultado da Promise a quantidade de registros removidos (zero indica que nada foi removido);
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const remove = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //comando SQL modificável
            tx.executeSql(
                `DELETE FROM ${table} WHERE id=?;`,
                [id],
                //-----------------------
                (_, { rowsAffected }) => {
                    resolve(rowsAffected);
                },
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });
    });
};

export default {
    create,
    update,
    find,
    all,
    remove,
};
