const pgConnection = process.env.DATABASE_URL

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    connection: {
      filename: './data/users.db3'
    }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      connectionString: pgConnection,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }

};
