export default [
    `Create Table if not exists Users (
        id INTEGER primary key AUTOINCREMENT,
        username NVARCHAR(100),
        email NVARCHAR(150),
        password NVARCHAR(20),
        dividendGoal INT default 0
    );`,

    `Create Table if not exists DividendAnalysis (
        id INTEGER primary key AUTOINCREMENT,
        reportDate DATETIME
    );`,

    `Create Table if not exists DividendAnalysisResult (
        id INTEGER primary key AUTOINCREMENT,
        regularMarketPrice DOUBLE default 0.0,
        symbol NVARCHAR(10),
        shortName NVARCHAR(250),
        dy DOUBLE default 0.0,
        py DOUBLE default 0.0,
        totalEarnings1 DOUBLE default 0.0,
        totalEarnings2 DOUBLE default 0.0,
        totalEarnings3 DOUBLE default 0.0,
        totalEarnings4 DOUBLE default 0.0,
        totalEarnings5 DOUBLE default 0.0,
        dividendValuation DOUBLE default 0.0,
        scoreFromRecomendationSystem DOUBLE default 0.0,
        dividendAnalysis_id INTEGER not null,
        FOREIGN KEY (dividendAnalysis_id) REFERENCES DividendAnalysis(id)
    );`,
];
