// load .env file
require('dotenv').config();

// import express package
import express from 'express';
import path from 'path';

// import middleware and database config.
import appMiddlewares from './configs/middlewares';
import './configs/database';

// import routes
import routes from './routes/routes';

// create app instance
const app = express();

// serve static file
app.use(express.static(path.join(__dirname, '../public')));

// set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set middlewares
appMiddlewares(app);

// app routes
app.use(routes);

// start our server.
app.listen(app.get('port'), () => {
  console.log(`Server is running on port: ${app.get('port')}`);
  console.log('====================================');
  console.log(`server environment is: ${process.env.NODE_ENV}`);
});
