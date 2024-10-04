const request = require('supertest');
const app = require('../src/app');

describe('GET /api/hello', function() {
  it('responds with json containing a message', function(done) {
    request(app)
      .get('/api/hello')
      .expect(200)
      .end(function(err, response) {
        if (err) return done(err);
        expect(response.body.message).toBe('Hello, World!');
        done();
      });
  });
});
