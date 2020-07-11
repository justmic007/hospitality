import request from 'supertest'
import knex from '../knex'
import express from 'express';
import * as k from '../migrations/20200612150906_create-rooms-table';
// const request = supertest(app)

const app = express();

describe('routes', () => {
  beforeAll(async () => {
    // run migrations
    await knex.migrate.latest([k])
      .then(() => {
        // run seeds
        return knex.seed.run();
      });
  });
  it('tests a POST', async () => {
    console.log('It works');
  });
});

xdescribe('hostels', () => {
  beforeAll(async () => {
    // await knex('rooms');
    // await knex('hospitality_test').truncate();
  });
  describe('POST /hostels', () => {
    it('responds with json', async () => {
      // console.log('XXXXXXXXXX', rooms);
      const res = await request(app).post('/hostels')
        .send({
          configuration: 'Mixed Dorm Room',
          description: 'A mixed dorm room',
          name: 'DormRoom0000',
          column: 'Mixed',
          no_of_bed: 4,
        })
        // .set('Accept', 'application/json')
        // .expect('Content-Type', /json/)
        // .expect(200)
        .end()
      // const res = await request.get('/hostels')

      console.log('@@@@@', res)
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      // .expect(200, done);
    });
  });

  xdescribe('GE /hostels', () => {
    it('responds with json', async () => {
      console.log('XXXXXXXXXX', rooms);
      await request.post('/hostels').send(rooms)
      const res = await request.get('/hostels')

      console.log('@@@@@', res)
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      // .expect(200, done);
    });
  });
});
