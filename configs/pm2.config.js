module.exports = {
    apps: [
        {
            name: "rest-sql-api",
            script: "server.js",
            instances: "max",
            exec_mode: "cluster",
            watch: true,
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};
