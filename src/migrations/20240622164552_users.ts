import type { Knex } from 'knex';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('User', (table) => {
    table.string('id', 36).notNullable().unique().primary();
    table.string('email').notNullable().unique();
    table.string('phone').notNullable();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.tinyint('emailVerified').defaultTo(0);
    table.tinyint('phoneVerified').defaultTo(0);
    table.string('password').notNullable();
    table.dateTime('dateOfBirth').nullable();
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('deletedAt').nullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('User');
}
