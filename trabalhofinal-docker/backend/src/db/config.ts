import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'db', // Nome do serviço do contêiner Docker
  port: 3306, 
  username: 'root',
  password: '123456',
  database: 'lojavirtual',
  logging: false,
});

export default connection;


/*
const connection = new Sequelize({
  dialect: 'mysql',
  host: 'db',
  username: 'root',
  password: '123456',
  database: 'lojavirtual',
  logging: false,
});
 */

// const connection = new Sequelize({
//   dialect: 'mysql',
//   host: process.env.NODE_ENV !== 'test' ? 'db' : 'localhost',
//   port: process.env.NODE_ENV !== 'test' ? 3306 : 3321,
//   username: 'root',
//   password: '123456',
//   database: process.env.NODE_ENV !== 'test' ? 'lojavirtual' : 'lojavirtual_test',
//   logging: false,
// });