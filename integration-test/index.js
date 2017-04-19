//  index.js
//
//  Entrypoint for the 'node-docker-microservice' integration tests.
//  Note that due to:
//
//  https://github.com/visionmedia/supertest/issues/314
//
//  If the service isn't running, you'll get failures like:
//
//  Cannot read property 'status' of undefined
//
//  For test failures.
const supertest = require('supertest')
const should = require('should')

describe('users-service', () => {
  const api = supertest('http://localhost:4000')

  it('returns a 200 for a known user', (done) => {
    api.get('/search?email=alpha@example.com')
      .expect(200, done)
  })
})
