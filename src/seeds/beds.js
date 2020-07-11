// import rooms from '../beds'

const beds = require('../beds');


exports.seed = function (knex, Promise) {
  return knex('beds').del()
    .then(function () {
      return knex('beds').insert(beds);
    });
};