import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('AccountHistory', (table) => {
    table.string('id', 36).notNullable().unique().primary();
    table.string('userId', 36).notNullable().unique();
    table.string('accountId', 36).notNullable().unique();
    table.decimal('inflow', 18, 2).defaultTo(0);
    table.decimal('outflow', 18, 2).defaultTo(0);
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('deletedAt').nullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('AccountHistory');
}

