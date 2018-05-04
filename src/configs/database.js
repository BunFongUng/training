// load .env file.
require('dotenv').config();

// import mongoose module
import mongoose from 'mongoose';

// set mongoose promise to use our global promise.
mongoose.Promise = global.Promise;

try {
  /**
   * using the different mongodb url base on
   * environment
   */
  if (process.env.NODE_ENV === 'development') {
    mongoose.connect(process.env.DEV_DB_URL);
  } else {
    mongoose.connect(process.env.PROD_DB_URL);
  }
} catch (error) {
  if (process.env.NODE_ENV === 'development') {
    mongoose.createConnection(process.env.DEV_DB_URL);
  } else {
    mongoose.createConnection(process.env.PROD_DB_URL);
  }
}

/**
 * display the message of which mongoDB url connected
 * if mongoose connection is success.
 *
 * otherwise will throw the error.
 */
mongoose.connection
  .once('open', () => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`MongoDB connected to: ${process.env.DEV_DB_URL}`);
    } else {
      console.log(`MongoDB connected to: ${process.env.PROD_DB_URL}`);
    }
  })
  .on('error', err => {
    throw err;
  });
