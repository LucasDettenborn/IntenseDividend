import { DatabaseConnection } from '../database/database-connection';

const table = 'DividendAnalysisResult';
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
                `INSERT INTO ${table} (regularMarketPrice, symbol, shortName, dy, py, totalEarnings1, totalEarnings2, totalEarnings3, totalEarnings4, totalEarnings5, dividendValuation, scoreFromRecomendationSystem, dividendAnalysis_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                [
                    obj.d.regularMarketPrice,
                    obj.d.symbol,
                    obj.d.shortName,
                    obj.d.dy,
                    obj.d.py,
                    obj.d.totalEarnings1,
                    obj.d.totalEarnings2,
                    obj.d.totalEarnings3,
                    obj.d.totalEarnings4,
                    obj.d.totalEarnings5,
                    obj.d.dividendValuation,
                    obj.d.scoreFromRecomendationSystem,
                    obj.responseDA,
                ],
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
                `UPDATE ${table} SET regularMarketPrice=?, symbol=?, shortName=?, dy=?, py=?, totalEarnings1=?, totalEarnings2=?, totalEarnings3=?, totalEarnings4=?, totalEarnings5=?, dividendValuation=?, scoreFromRecomendationSystem=? WHERE id=?;`,
                [
                    obj.regularMarketPrice,
                    obj.symbol,
                    obj.shortName,
                    obj.dy,
                    obj.py,
                    obj.totalEarnings1,
                    obj.totalEarnings2,
                    obj.totalEarnings3,
                    obj.totalEarnings4,
                    obj.totalEarnings5,
                    obj.dividendValuation,
                    obj.scoreFromRecomendationSystem,
                ],
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
