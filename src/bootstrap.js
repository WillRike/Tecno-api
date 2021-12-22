const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env' : '.env',
});
