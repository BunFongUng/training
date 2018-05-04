/**
 * import modules
 */
import compression from 'compression';
import bodyParser from 'body-parser';
import logger from 'morgan';
import expressValidator from 'express-validator';
import ejsLayout from 'ejs-layouts';

/**
 * set up middlewares for app.
 */
export default app => {
  app.set('port', process.env.PORT);

  // compress response bodies for all request.
  app.use(compression());

  //request logger middleware
  app.use(logger('dev'));

  //Parse incoming request bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(ejsLayout.express);

  // valid data input in form.
  app.use(expressValidator());
};
