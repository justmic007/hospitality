exports.up = function up(knex) {
  return knex.schema.createTable('beds', (table) => {
    table.increments().notNullable;
    table.integer('bedNo').unsigned().notNullable;
    table.string('type').notNullable;
    table.string('description', 150).notNullable();
    table.integer('room').unsigned().notNullable()
    // .references('roomId')
    // .inTable('rooms')
    // .onUpdate('CASCADE')
    // .onDelete('CASCADE');
  }
  )
}

exports.down = function down(knex) {
  return knex.schema
    .dropTableIfExists('beds')
    .dropTableIfExists('rooms');

}



// exports.up = function (knex) {
//   return knex.schema.createTable('rooms', (room) => {
//     room.increments('roomId').notNullable();
//     room.string('configuration', 70)
//       .notNullable();
//     room.string('description', 150)
//       .notNullable();
//     room.string('name')
//       .notNullable();
//     room.enu('type', ['Mixed', 'Male', 'Female', 'Any'])
//       .notNullable();
//     room.enu('amount', [35000.00, 29000.00, 95500.00, 10000.00])
//       .notNullable();
//     room.timestamp('createdAt', { useTz: true })
//       .defaultTo(knex.fn.now());
//     room.timestamp('updatedAt', { useTz: true })
//       .defaultTo(knex.fn.now());
//   })
//     .createTable('beds', (bed) => {
//       bed.increments().notNullable;
//       bed.integer('bedNo').unsigned().notNullable;
//       bed.string('type').notNullable;
//       bed.enu('amount', [5000.00, 9000.00, 95500.00, 10000.00])
//         .notNullable();
//       bed.string('description', 150).notNullable();
//       bed.integer('room').unsigned().notNullable()
//         .references('roomId')
//         .inTable('rooms')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE');
//       bed.timestamp('createdAt', { useTz: true })
//         .defaultTo(knex.fn.now());
//       bed.timestamp('updatedAt', { useTz: true })
//         .defaultTo(knex.fn.now());
//     })
//     .createTable('bookings', (booking) => {
//       booking.increments().notNullable;
//       booking.date('checkInTime', { useTz: true })
//         .defaultTo(knex.fn.now());
//       booking.date('checkOutTime')
//         .defaultTo(knex.fn.now());
//       booking.integer('no_of_rooms').unsigned().notNullable;
//       booking.integer('no_of_nights').notNullable().defaultTo(0);
//       booking.boolean('currencyAccepted', ['NAIRA', 'USD', 'GBP', 'EUR']).boolean().defaultTo('False');
//       booking.boolean('paymentAccepted').defaultTo('False');
//       booking.string('description', 150).notNullable();
//       booking.integer('room').unsigned()
//         .references('roomId')
//         .inTable('rooms')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE');
//       booking.integer('bed').unsigned()
//         .references('id')
//         .inTable('beds')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE');
//       booking.integer('reservation').unsigned()
//         .references('id')
//         .inTable('reservations')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE');
//       booking.timestamp('createdAt', { useTz: true })
//         .defaultTo(knex.fn.now());
//       booking.timestamp('updatedAt', { useTz: true })
//         .defaultTo(knex.fn.now());
//     })
//     .createTable('reservations', (reservation) => {
//       reservation.increments().notNullable;
//       reservation.string('description', 150).notNullable();
//       reservation.integer('room').unsigned()
//         .references('roomId')
//         .inTable('rooms')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE');
//       reservation.integer('bed').unsigned().notNullable()
//         .references('id')
//         .inTable('beds')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE');
//       reservation.timestamp('createdAt', { useTz: true })
//         .defaultTo(knex.fn.now());
//       reservation.timestamp('updatedAt', { useTz: true })
//         .defaultTo(knex.fn.now());
//     })
//     .createTable('customers', (customer) => {
//       customer.increments().notNullable;
//       customer.string('description', 150);
//       customer.string('firstName', 70);
//       customer.string('lastName', 70);
//       customer.unique('email', 70);
//       customer.string('phoneNo', 14);
//       customer.string('next_of_kin_fullName', 150);
//       customer.string('next_of_kin_phoneNo', 14);
//       customer.integer('booking').unsigned()
//         .references('id')
//         .inTable('bookings')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE');
//       customer.integer('reservation').unsigned()
//         .references('id')
//         .inTable('reservations')
//         .onUpdate('CASCADE')
//         .onDelete('CASCADE');
//       customer.timestamp('createdAt', { useTz: true })
//         .defaultTo(knex.fn.now());
//       customer.timestamp('updatedAt', { useTz: true })
//         .defaultTo(knex.fn.now());
//     })
// };

// exports.down = function (knex) {
//   return knex.schema
//     .dropTableIfExists('reservations')
//     .dropTableIfExists('bookings')
//     .dropTableIfExists('customers')
//     .dropTableIfExists('beds')
//     .dropTableIfExists('rooms')

// };
