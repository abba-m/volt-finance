import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Account', (table) => {
    table.string('id', 36).notNullable().unique().primary();
    table.string('userId', 36).notNullable().unique();
    table.decimal('balance', 18, 2).defaultTo(0);
    table.string('currency', 3).defaultTo('NGN');
    table.string('status', 20).defaultTo('active');
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('deletedAt').nullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Account');
}

