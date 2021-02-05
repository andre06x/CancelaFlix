import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('series').notNullable();
    table.string('image').notNullable();
    table.string('season').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('points');
}
