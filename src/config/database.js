module.exports = {
    dialect: "postgres",
    database: "clarkebackend",
    username: "VictorSalome",
    password: "XbpRIw1GP8ye",
    host: "ep-lively-sun-a5ts5zf8.us-east-2.aws.neon.tech",
    port: "5432",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
