const request = require('supertest');
const app = require('../src/app');

describe('GET /api/hello', () => {
  it('responds with json containing a message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello, World!');
  });
});
