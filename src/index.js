const env = require('./config/env');
const app = require('./app');

const start = async () => {
  try {
    app.listen(env.PORT, () => {
      console.log(`Server is listening on port ${env.PORT}...`);
    });
  } catch (err) {
    console.error(err);  
  }
};

start();