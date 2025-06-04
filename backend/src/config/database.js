require('dotenv').config();

const config = {
  username: 'postgres',
  password: '0000',
  database: 'userLoginSystem',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// Add some validation
if (!config.password) {
  console.error('Database password is not set! Please set your PostgreSQL password in the config.');
  process.exit(1);
}

module.exports = {
  development: config,
  test: config,
  production: config
}; 