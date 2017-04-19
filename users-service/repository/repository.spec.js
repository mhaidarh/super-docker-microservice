const should = require('should')
const repository = require('./repository')
const config = require('../config/config')

describe('Repository', () => {
  var connectionSettings = {
    host: config.db.host,
    database: config.db.database,
    user: config.db.user,
    password: config.db.password,
    port: config.db.port
  }

  // ---------------------------------------------------------------------------
  it('should connect with a promise', () => {
    repository.connect(connectionSettings).should.be.a.Promise()
  })

  // ---------------------------------------------------------------------------
  it('should throw an exception if it is not created with a host, username, password and port', () => {
    //  Remember - if you are going to test a promise without 'done', make sure you *return* a promise!
    return Promise.all([
      repository.connect({
        // host: 'localhost',
        user: 'alpha',
        password: 123,
        port: 3306
      }).should.be.rejectedWith(/host/),

      repository.connect({
        host: 'localhost',
        // user: 'alpha',
        password: 123,
        port: 3306
      }).should.be.rejectedWith(/user/),

      repository.connect({
        host: 'localhost',
        user: 'alpha',
        // password: 123,
        port: 3306
      }).should.be.rejectedWith(/password/),

      repository.connect({
        host: 'localhost',
        user: 'alpha',
        password: 123
        // port: 3306
      }).should.be.rejectedWith(/port/)

    ])
  })
})
