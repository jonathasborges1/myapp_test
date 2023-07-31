import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', // se usar backend em docker coloca o nome do container, se nao usar coloca localhost 
  port: 3306, 
  username: 'root',
  password: '123456',
  database: 'lojavirtual',
  logging: false,
});

export default connection;
