import Knex  from 'knex';

// Configuration for connecting to the database server without specifying a database
const knex = Knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  },
});

const database = process.env.DB_NAME || "volt_db"


knex.raw(`CREATE DATABASE IF NOT EXISTS ${database}`)
  .then(() => {
    console.log(`Database '${database}' created successfully.`);
    process.exit(0);
  })
  .catch((error) => {
    console.error(`Error creating database '${database}':`, error);
    process.exit(1);
  })
  .finally(() => {
    knex.destroy(); // Close the database connection
  });