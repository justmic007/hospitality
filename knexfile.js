
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/hospitality',
    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/hospitality_test',
    // migrations: {
    //   directory: __dirname + '/src/testMigrations/migrations',
    // },
    // seeds: {
    //   directory: __dirname + '/src/testMigrations/seeds'
    // },
    // useNullAsDefault: true
  }
}

