import knex from '../knex';

// exports.getAll = (req, res) => {
//   return knex('beds')
// }

// exports.getById = (req, res) => {
//   console.log('bebeebeds', beds);

//   return knex('beds').where({ id })
// }

export default {
  getAllBeds: async () => {
    const beds = await knex('beds')
      .catch(error => {
        throw new Error(error);
      });
    return beds
  },
  getBedById: id => {
    return knex('beds').where({ id })
  }
}
// knex('users').where('id', 1)
// findBookBy: id => {
//   return db('books')
//     .where({ id })
//     .first();
// },