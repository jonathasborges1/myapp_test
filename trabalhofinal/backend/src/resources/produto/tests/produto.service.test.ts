import request from 'supertest';
import { server } from '../../../index';
import connection from '../../../db/config';


describe('Produto Service', () => {
  beforeAll(async () => {
     // Inicializar o servidor antes de executar os testes
    await server.bootstrap();
  });

  afterAll(async () => {
    // Fechar a conexão com o banco de dados após os testes
    await connection.close();
  });

  /**
   * pré requisito para esse teste:
   *
   * cadastrar manualmente um produto no banco de dados via interface MySQL
   * ou via API, mas lembrar de alterar o banco de dados para apontar para bd de teste
   * */
  it('should show all products', async () => {
    const res = await request(server.server).get('/v1/produto');

    console.log(res.status);
    console.log(res.body);

    expect(res.statusCode).toEqual(200);
    
    // Verifica se o corpo da resposta é um array ou objeto
    // (pode retornar um único produto ou um array de produtos)
    expect(Array.isArray(res.body) || typeof res.body === 'object').toBeTruthy();

    if (Array.isArray(res.body)) {
      // Se a resposta for um array, verifica se o tamanho do array é maior que zero
      expect(res.body.length).toBeGreaterThan(0);
  
      // Caso haja mais de um produto, podemos verificar algumas propriedades do primeiro produto
      const firstProduct = res.body[0];
      expect(firstProduct).toHaveProperty('id');
      expect(firstProduct).toHaveProperty('nome');
      expect(firstProduct).toHaveProperty('preco');
      expect(firstProduct).toHaveProperty('estoque');
    } else {
      // Se a resposta for um único produto, verifica se ele possui as propriedades esperadas
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('nome');
      expect(res.body).toHaveProperty('preco');
      expect(res.body).toHaveProperty('estoque');
    }

    /*
    no caso do meu teste e banco de dados local,
    o produto cadastrado possui essas caracteristicas abaixo:

    {
      id: '8603f67e-2e71-11ee-a77e-0242ac130002',
      nome: 'livro',
      preco: 10,
      estoque: 2,
      createdAt: '2023-07-30T00:39:11.000Z',
      updatedAt: '2023-07-30T00:39:11.000Z'
    }

    por isso o teste ficaria assim:
    
    expect(res.body.nome).toEqual("Teste");
    expect(res.body.preco).toEqual(123);
    expect(res.body.estoque).toEqual(2);
     
      contudo, caso voce possua mais de um produto cadastrado para teste,
      o endpoint irá retornar um array. Nesse caso, talvez seja mais interessante
      verificar se o tamanho do array retornado está de acordo com a quantidade
      de produtos existentes, por exemplo.
    */
  
  });

  /*  implementar - 2,5
     * 
     * pré requisito para esse teste:
     * 
     * cadastrar manualmente um produto no banco de dados via interface MySQL
     * ou via API, mas lembrar de alterar o banco de dados para apontar para bd de teste
  */

  it('should get specific product', async () => {
    /*
      Cadastrar manualmente um produto no banco de dados de teste aqui
      Certifique-se de obter o ID do produto cadastrado
    */
    const produtoCriado = await request(server.server)
      .post('/v1/produto')
      .send({
        nome: 'Produto de Teste',
        preco: 99.99,
        estoque: 10,
      });

    const produtoId = produtoCriado.body.id;

    // Fazer a requisição para buscar o produto específico pelo ID
    const res = await request(server.server).get(`/v1/produto/${produtoId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', produtoId);
    expect(res.body).toHaveProperty('nome', 'Produto de Teste');
    expect(res.body).toHaveProperty('preco', 99.99);
    expect(res.body).toHaveProperty('estoque', 10);
  });


});
