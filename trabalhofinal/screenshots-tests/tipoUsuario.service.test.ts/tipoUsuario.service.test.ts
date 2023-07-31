import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('tipoUsuario Service', () => {
  beforeAll(async () => {
    // Inicializar o servidor antes de executar os testes
    await server.bootstrap();
  });

  /**
   * Teste para verificar se a rota GET /tipo-usuario está retornando todos os tipos de usuário.
   * Para esse teste, é necessário ter alguns tipos de usuário cadastrados no banco de dados.
   * Você pode cadastrar manualmente os tipos de usuário antes de executar este teste.
   * Certifique-se de que a rota /tipo-usuario esteja apontando para o banco de dados de teste.
   */
  it('should get all user types', async () => {
    // Fazer a requisição GET à rota /tipo-usuario
    const res = await request(server.server).get('/v1/tipo-usuario');

    // Verificar se o status da resposta é 200 (OK)
    expect(res.statusCode).toEqual(200);

    // Verificar se a resposta contém dados (array com pelo menos 1 elemento)
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);

    // Verificar se cada elemento do array contém as propriedades esperadas (id e rotulo)
    res.body.forEach((tipoUsuario: any) => {
      expect(tipoUsuario).toHaveProperty('id');
      expect(tipoUsuario).toHaveProperty('rotulo');
    });
  });

  afterAll(async () => {
    // Fechar a conexão com o banco de dados após os testes
    await connection.close();
  });
});
