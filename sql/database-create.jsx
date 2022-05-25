export default [
    `DROP TABLE IF EXISTS users;`,

    `Create Table if not exists Users (
            id integer primary key AUTOINCREMENT,
            username text,
            email text,
            password text,
            dividendGoal int default 0
    );`,
]

