// Update with your config settings.

const dbConnection = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/bizcards.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    }
  }
};
