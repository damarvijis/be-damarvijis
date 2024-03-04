const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with text "Damar BE App VPS!"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Damar BE App VPS!', done);
  });
});
