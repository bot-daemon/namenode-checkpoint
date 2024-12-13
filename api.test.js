// api.test.js
const request = require('supertest');
const app = require('./index'); // Importando a API para os testes

describe('GET /', () => {
  it('deve responder com status 200 e a mensagem "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
