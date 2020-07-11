module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/hospitality',
    migrations: {
      directory: __dirname + '/src/migrations'
    },
    seeds: {
      directory: __dirname + '/src/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/<examples_test>',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}