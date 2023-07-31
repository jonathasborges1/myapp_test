import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';

describe('Auth Service', () => {
  beforeAll(async () => {
    await server.bootstrap();
  });

  /**  implementar - 2,5 */
  it('should create a new user on signup', async () => {
    // Dados do novo usuário a ser criado
    const newUser = {
      nome: "NovoUsuario",
      email: "novo.usuario@example.com",
      senha: "senha123"
    };

    // Fazer a requisição POST à rota /signup com os dados do novo usuário
    const res = await request(server.server)
      .post('/v1/signup')
      .send(newUser);

    // Verificar se o status da resposta é 201 (Created)
    expect(res.statusCode).toEqual(201);

    // Verificar se a resposta contém o novo usuário criado
    expect(res.body).toHaveProperty('id');
    expect(res.body.nome).toEqual(newUser.nome);
    expect(res.body.email).toEqual(newUser.email);

    // Verificar se o tipoUsuarioId do novo usuário foi definido como CLIENT (ou outro valor apropriado)
    expect(res.body.tipoUsuarioId).toEqual('6a4cda94-fbb6-476b-be29-f4124cae9058'); // CLEINTE -> 6a4cda94-fbb6-476b-be29-f4124cae9058
  });

  afterAll(async () => {
    await connection.close();
  });
});
