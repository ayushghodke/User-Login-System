require('dotenv').config();

const config = {
  username: 'postgres',
  password: '0000',
  database: 'userLoginSystem',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false
};

module.exports = {
  development: config,
  test: config,
  production: config
}; 