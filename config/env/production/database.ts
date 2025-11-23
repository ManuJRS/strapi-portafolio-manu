const parse = require('pg-connection-string').parse;

export default ({ env }) => {
    const config = parse(env('DATABASE_URL'));

    return {
        connection: {
            client: 'postgres',
            connection: {
                host: config.host,
                port: config.port,
                database: config.database,
                user: config.user,
                password: config.password,
                ssl: {
                    ca: env('DATABASE_CA'),
                },
            },
            debug: false,
        },
    };
};
