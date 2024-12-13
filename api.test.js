// api.test.js
const request = require('supertest');
const { app, startServer } = require('./index');  // Importando o app e a função startServer

describe('GET /', () => {
  let server;

  // Inicia o servidor antes de rodar os testes
  beforeAll(() => {
    server = startServer();
  });

  // Teste da rota GET
  it('deve responder com status 200 e a mensagem "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  // Fecha o servidor depois de rodar os testes
  afterAll(() => {
    server.close();  // Fecha o servidor para garantir que os testes terminem corretamente
  });
});
