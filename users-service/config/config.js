//  config.js
//
//  Simple application configuration. Extend as needed.
module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 4000,
  db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'users',
    user: 'users_service',
    password: '123',
    port: 3306
  }
}
