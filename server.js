import express from 'express';
import path from 'path';
import logger from 'morgan';
// import knex from './src/knex';
import bodyParser from 'body-parser';

import knex from './src/knex'
import routes from './src/hostels/routes';

const app = express();
knex.queryBuilder();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/hostels', routes)
app.use('/hostels/:id', routes)
// Errors handlers

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development'
  });
});

app.listen(4004, () => {
  // console.log(`app is listening to port 4004`);
});
